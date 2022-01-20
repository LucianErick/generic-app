import * as S from "./styles";

export const RegisterCard = () => {
  return (
    <S.Container>
      <S.Text>User registration</S.Text>
      <S.Form>
        <div className="name">
          <input type="text" id="name" placeholder="Name" />
        </div>
        <div className="email">
          <input type="email" id="email" placeholder="Email" />
        </div>
        <div className="password">
          <input type="password" id="password" placeholder="Password" />
        </div>
        <div className="phone">
          <input type="tel" id="phone" placeholder="Phone" />
        </div>
        <div className="address">
          <input type="text" id="address" placeholder="Address" />
        </div>
        <div className="button">
          <button type="submit">Register</button>
        </div>
      </S.Form>
    </S.Container>
  );
};
