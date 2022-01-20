import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { User } from "../models/User";
import userViews from "../views/userViews";

class AuthController {
  async authenticate(req: Request, res: Response) {
    const repository = getRepository(User);
    const { email, password, admin } = req.body;

    const user = await repository.findOne({ where: { email } });

    if (!user) {
      return res.sendStatus(401);
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword || (isValidPassword && user.admin !== admin)) {
      return res.sendStatus(401);
    }

    const token = jwt.sign({ id: user.id }, "secret", { expiresIn: "1d" });
    return res.json({
      user: userViews.render(user),
      token,
    });
  }
}

export default new AuthController();
