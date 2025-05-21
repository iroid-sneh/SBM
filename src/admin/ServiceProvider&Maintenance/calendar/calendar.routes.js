import express from "express";
import asyncWrap from "express-async-wrapper";
import calendarController from "./calendar.controller";
const router = express.Router();

router.get("/", asyncWrap(calendarController.calendarPage));

export default router;
