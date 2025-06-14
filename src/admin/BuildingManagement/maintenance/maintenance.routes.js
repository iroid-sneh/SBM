import express from "express";
import asyncWrap from "express-async-wrapper";
import maintenanceController from "./maintenance.controller";
const router = express.Router();

router.get("/inreview", asyncWrap(maintenanceController.inReviewPage));

router.get("/inprocess", asyncWrap(maintenanceController.inProcessPage));

router.get("/execution", asyncWrap(maintenanceController.executionPage));

router.get("/history", asyncWrap(maintenanceController.historyPage));

export default router;
