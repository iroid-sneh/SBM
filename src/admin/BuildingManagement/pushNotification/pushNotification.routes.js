import express from "express";
import asyncWrap from "express-async-wrapper";
import pushNotificationController from "./pushNotification.controller";
const router = express.Router();

router.get("/", asyncWrap(pushNotificationController.pushNotificationPage));

export default router;
