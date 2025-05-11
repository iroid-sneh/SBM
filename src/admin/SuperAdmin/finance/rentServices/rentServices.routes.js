import express from "express";
import asyncWrap from "express-async-wrapper";
import rentServicesController from "./rentServices.controller";
const router = express.Router();

router.get("/", asyncWrap(rentServicesController.rentServicesPage));

router.get('/release', asyncWrap(rentServicesController.releasePage))

export default router;
