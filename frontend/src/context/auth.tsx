import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { api, authenticate } from "../services/api";
import { User } from "../types/User";

type AuthProviderProps = {
  children: ReactNode;
};

interface AuthContextData {
  signed: boolean;
  user: User | null;
  Login(email: string, password: string, admin: boolean): Promise<void>;
  Logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const Login = async (email: string, password: string, admin: boolean) => {
    try {
      const response = await authenticate(email, password, admin);
      setUser(response.user);

      localStorage.setItem("@App:user", JSON.stringify(response.user));
      localStorage.setItem("@App:token", response.token);
      api.defaults.headers.common["Authorization"] = `Bearer ${response.token}`;
    } catch (err) {
      toast.error("Please check your credentials and try again.");
    }
  };

  const Logout = async () => {
    setUser(null);

    localStorage.removeItem("@App:user");
    localStorage.removeItem("@App:token");
  };

  useEffect(() => {
    const storagedUser = localStorage.getItem("@App:user");
    const storagedToken = localStorage.getItem("@App:token");

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.common["Authorization"] = storagedToken;
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), Login, Logout, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export default AuthContext;
