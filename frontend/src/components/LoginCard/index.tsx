import { SyntheticEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/auth";
import * as S from "./styles";

export const LoginCard = () => {
  const navigate = useNavigate();

  const authContext = useContext(AuthContext);

  const handleLogin = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as any;

    const email = form.email.value;
    const password = form.password.value;
    const admin = form.email.checked;
    const remember = form.email.checked;

    authContext.Login(email, password, admin);
  };

  return (
    <S.Container>
      <S.Welcome>Welcome back!</S.Welcome>
      <S.FormContainer onSubmit={handleLogin}>
        <S.Input>
          <input type="email" id="email" placeholder="Email" />
        </S.Input>
        <S.Input>
          <input type="password" id="password" placeholder="Password" />
        </S.Input>
        <S.OptionButtonGroup>
          <S.IsAdmin>
            <input type="checkbox" name="admin" id="admin" />
            <label htmlFor="admin">I'm admin</label>
          </S.IsAdmin>
          <S.RememberMe>
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </S.RememberMe>
        </S.OptionButtonGroup>
        <S.Button>
          <button type="submit">Login</button>
        </S.Button>
        <S.Signup>
          <span>Don't have account?</span>
          <button onClick={() => navigate("/register")}>Sign up</button>
        </S.Signup>
      </S.FormContainer>
    </S.Container>
  );
};
