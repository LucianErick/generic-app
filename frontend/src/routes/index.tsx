import { useAuth } from "../context/auth";
import { AppRoutes } from "./AppRoutes";
import { SignRoutes } from "./SignRoutes";

export const Routes = () => {
  const { signed } = useAuth();
  return signed ? <AppRoutes /> : <SignRoutes />;
};
