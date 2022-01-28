import { getRepository } from "typeorm";
import { Attendance } from "../models/Attendance";
import { Category } from "../models/Category";
import { Service } from "../models/Service";

type createAttendance = {
  user_id: string;
  service_id: string;
  start: string;
};

class AttendanceService {
  async createAttendance({ user_id, service_id, start }: createAttendance) {
    const repository = getRepository(Attendance);

    const attendanceExists = await repository.findOne({
      where: {
        user_id,
        service_id,
        start,
      },
    });

    if (attendanceExists) {
      throw new Error("This attendance has been scheduled.");
    }

    const attendance = repository.create({
      user_id,
      service_id,
      start: new Date(start),
    });

    await repository.save(attendance);
  }
}

export { AttendanceService };
