import express from "express";
import asyncWrap from "express-async-wrapper";
import eventPaymentsController from "./eventPayments.controller";
const router = express.Router();

router.get("/", asyncWrap(eventPaymentsController.eventPaymentsPage));

router.get("/release", asyncWrap(eventPaymentsController.releasePage));

export default router;
