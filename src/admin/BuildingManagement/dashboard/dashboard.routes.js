import express from "express";
import asyncWrap from "express-async-wrapper";
import dashboardController from "./dashboard.controller";
const router = express.Router();

router.get("/", asyncWrap(dashboardController.dashboardPage));

export default router;
