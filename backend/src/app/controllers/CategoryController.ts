import { Request, Response } from "express";

import { CategoryService } from "../services/CategoryService";

import getErrorMessage from "../helpers/errorMessage";

class CategoryController {
  async store(req: Request, res: Response) {
    const { name } = req.body;
    const categoryService = new CategoryService();
    try {
      const category = await categoryService.createCategory(name);
      return res.json(category);
    } catch (err) {
      return res.status(409).json({
        message: getErrorMessage(err),
      });
    }
  }
}

export default new CategoryController();
