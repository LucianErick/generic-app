import { Request, Response } from "express";

import { WorkService } from "../services/WorkService";

import getErrorMessage from "../helpers/errorMessage";

class WorkController {
  async store(req: Request, res: Response) {
    const { name, description, worker_id, category_id, price, estimated_time } =
      req.body;
    const workService = new WorkService();
    try {
      const service = await workService.createService({
        name,
        description,
        worker_id,
        category_id,
        price,
        estimated_time,
      });
      return res.json(service);
    } catch (err) {
      return res.status(409).json({
        message: getErrorMessage(err),
      });
    }
  }
}

export default new WorkController();
