export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
  password: string;
};

export type CreateUser = {
  name: string;
  email: string;
  phone: string;
  address?: string;
  password: string;
};
