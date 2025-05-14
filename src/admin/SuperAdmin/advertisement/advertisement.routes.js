import express from "express";
import asyncWrap from "express-async-wrapper";
import advertisementController from "./advertisement.controller.js";
const router = express.Router();

router.get("/", asyncWrap(advertisementController.advertisementPage));

export default router;
