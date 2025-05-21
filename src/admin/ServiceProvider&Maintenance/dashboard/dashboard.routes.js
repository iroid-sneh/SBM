import express from "express";
import asyncWrap from "express-async-wrapper";
import dashboardController from "./dashboard.controller";
const router = express.Router();

router.get("/", asyncWrap(dashboardController.dashboardPage));

router.get(
    "/transactionshistory",
    asyncWrap(dashboardController.transactionsHistoryPage)
);

export default router;
