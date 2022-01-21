import { User } from "./User";

export type ResponseAuth = {
  token: string;
  user: User;
};
