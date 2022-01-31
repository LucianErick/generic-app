import { getRepository, Repository } from "typeorm";
import { Category } from "../models/Category";
import { Service } from "../models/Service";

type createService = {
  worker_id: string;
  category_id: string;
  name: string;
  description?: string;
  price: number;
  estimated_time?: number;
};

class WorkService {
  async createService({
    name,
    description,
    worker_id,
    category_id,
    price,
    estimated_time,
  }: createService) {
    const repository = getRepository(Service);

    const serviceExists = await repository.findOne({
      where: {
        worker_id,
        name,
      },
    });

    if (serviceExists) {
      throw new Error("This service for this worker already exists.");
    }

    const service = repository.create({
      name,
      description,
      worker_id,
      category_id,
      price,
      estimated_time,
    });

    await repository.save(service);
  }

  async filterByCategory(name: string) {
    const categoryRepository = getRepository(Category);
    const serviceRepository = getRepository(Service);

    const category = await categoryRepository.findOne({
      where: [{ name: name }],
    });

    if (!category) {
      throw new Error("Category was not found");
    }

    const list = await serviceRepository.find({
      where: [{ category_id: category.id }],
    });

    return list;
  }

  async listServices() {
    const serviceRepository = getRepository(Service);
    const services = serviceRepository.find();
    return services;
  }
}

export { WorkService };
