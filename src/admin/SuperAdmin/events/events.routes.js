import express from "express";
import asyncWrap from "express-async-wrapper";
import eventsController from "./events.controller";
const router = express.Router();

router.get("/", asyncWrap(eventsController.eventsPage));

export default router;
