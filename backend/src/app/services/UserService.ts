import { getRepository } from "typeorm";
import { User } from "../models/User";

type CreateUser = {
  name: string;
  email: string;
  password: string;
  admin: boolean;
  phone: string;
  address?: string;
};

class UserService {
  async createUser({
    name,
    email,
    password,
    admin,
    phone,
    address,
  }: CreateUser) {
    const repository = getRepository(User);

    const userExists = await repository.findOne({ where: { email } });

    if (userExists) {
      throw new Error("User already exists");
    }

    const user = repository.create({
      email,
      password,
      admin,
      name,
      phone,
      address,
    });

    await repository.save(user);
  }
}

export { UserService };
