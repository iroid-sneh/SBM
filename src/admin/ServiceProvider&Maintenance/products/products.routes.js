import express from "express";
import asyncWrap from "express-async-wrapper";
import productsController from "./products.controller";
const router = express.Router();

router.get("/", asyncWrap(productsController.productsPage));

router.get("/addService", asyncWrap(productsController.addServicePage));

export default router;
