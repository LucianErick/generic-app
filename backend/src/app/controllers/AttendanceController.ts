import { Request, Response } from "express";

import { AttendanceService } from "../services/AttendanceService";

import getErrorMessage from "../helpers/errorMessage";

class AttendanceController {
  async store(req: Request, res: Response) {
    const { user_id, service_id, start } = req.body;
    const attendanceService = new AttendanceService();
    try {
      const attendance = await attendanceService.createAttendance({
        user_id,
        service_id,
        start,
      });
      return res.json(attendance);
    } catch (err) {
      return res.status(409).json({
        message: getErrorMessage(err),
      });
    }
  }
}

export default new AttendanceController();
