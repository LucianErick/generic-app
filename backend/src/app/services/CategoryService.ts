import { getRepository } from "typeorm";
import { Category } from "../models/Category";

class CategoryService {
  async createCategory(name: string) {
    const repository = getRepository(Category);

    const categoryExists = await repository.findOne({
      where: { name: name.toLowerCase() },
    });

    if (categoryExists) {
      throw new Error("Category already exists");
    }

    const category = repository.create({
      name: name.toLowerCase(),
    });

    await repository.save(category);
  }
}

export { CategoryService };
