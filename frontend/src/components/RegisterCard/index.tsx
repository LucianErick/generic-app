import { ChangeEvent, SyntheticEvent, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../../services/api";
import {
  validateEmail,
  validatePhoneNumber,
} from "../../utils/validations";
import * as S from "./styles";

export const RegisterCard = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.length <= 8) {
      setPassword(value);
    }
  };

  const handleChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.length < 12) {
      setPhone(value);
    }
  };

  const handleSave = async (
    name: string,
    email: string,
    password: string,
    phone: string,
    address: string
  ) => {
    try {
      await saveUser({
        name,
        email,
        password,
        phone,
        address,
      });
      toast.success("Success registration");
      navigate("/login");
    } catch (err) {
      toast.error(`Email already exists.`);
    }
  };

  const handleRegisterUser = async (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as any;

    const email = form.email.value;
    const name = form.name.value;
    const address = form.address.value;

    name &&
    validateEmail(email) &&
    password.length === 8 &&
    validatePhoneNumber(phone)
      ? await handleSave(name, email, password, phone, address)
      : toast.error("Please, check your infos and try again later.");
  };

  return (
    <S.Container>
      <S.Text>User registration</S.Text>
      <S.Form onSubmit={handleRegisterUser}>
        <div className="name">
          <input type="text" id="name" placeholder="Name" required />
        </div>
        <div className="email">
          <input type="email" id="email" placeholder="Email" required />
        </div>
        <div className="password">
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={handleChangePassword}
            value={password}
            required
          />
        </div>
        <div className="phone">
          <input
            type="tel"
            id="phone"
            placeholder="Phone"
            onChange={handleChangePhone}
            value={phone}
            required
          />
        </div>
        <div className="address">
          <input type="text" id="address" placeholder="Address" required />
        </div>
        <S.Buttons>
          <div className="back">
            <button onClick={() => navigate("/login")}>Back</button>
          </div>
          <div className="button">
            <button type="submit">Register</button>
          </div>
        </S.Buttons>
      </S.Form>
    </S.Container>
  );
};
