import * as S from "./styles";

export const LoginCard = () => {
  return (
    <S.Container>
      <S.Welcome>Welcome back!</S.Welcome>
      <S.FormContainer>
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
          <button>Sign up</button>
        </S.Signup>
      </S.FormContainer>
    </S.Container>
  );
};
