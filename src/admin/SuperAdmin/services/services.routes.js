import express from "express";
import asyncWrap from "express-async-wrapper";
import servicesController from "./services.controller";
const router = express.Router();

router.get("/", asyncWrap(servicesController.servicesPage));

export default router;
