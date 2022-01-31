import { Router } from "express";
import AttendanceController from "./app/controllers/AttendanceController";
import AuthController from "./app/controllers/AuthController";
import CategoryController from "./app/controllers/CategoryController";
import UserController from "./app/controllers/UserController";
import WorkController from "./app/controllers/WorkController";
import authMiddleware from "./app/middlewares/authMiddleware";

const router = Router();

// User Auth
router.post("/users", UserController.store);
router.post("/auth", AuthController.authenticate);
router.get("/users", authMiddleware, UserController.index);

// Service
router.post("/services", WorkController.store)

// Category
router.post("/categories", CategoryController.store)

// Attendance
router.post("/attendances", AttendanceController.store)

export default router;
