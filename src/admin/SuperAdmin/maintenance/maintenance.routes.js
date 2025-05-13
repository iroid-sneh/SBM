import express from "express";
import asyncWrap from "express-async-wrapper";
import maintenanceController from "./maintenance.controller";
const router = express.Router();

router.get("/", asyncWrap(maintenanceController.maintenancePage));

export default router;
