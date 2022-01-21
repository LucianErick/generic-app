import axios, { AxiosRequestConfig } from "axios";
import { CreateUser } from "../types/User";

const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:4444";

const api = axios.create({
  baseURL: BASE_URL,
});

export const saveUser = async ({
  name,
  email,
  password,
  phone,
  address,
}: CreateUser) => {
  let status;
  const config: AxiosRequestConfig = {
    method: "POST",
    url: "/users",
    data: {
      name: name,
      email: email,
      phone: phone,
      address: address,
      password: password,
    },
  };

  await api(config).then((res) => (status = res.status));
  return status;
};
