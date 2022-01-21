import { Request, Response } from "express";

import { UserService } from "../services/UserService";

import getErrorMessage from "../helpers/errorMessage";
class UserController {
  index(req: Request, res: Response) {
    return res.send({ userId: req.userId });
  }

  async store(req: Request, res: Response) {
    const { email, password, admin, name, phone, address } = req.body;
    const userService = new UserService();
    try {
      const user = await userService.createUser({
        email,
        password,
        admin,
        name,
        phone,
        address,
      });
      return res.json(user);
    } catch (err) {
      return res.status(409).json({
        message: getErrorMessage(err),
      });
    }
  }
}

export default new UserController();
