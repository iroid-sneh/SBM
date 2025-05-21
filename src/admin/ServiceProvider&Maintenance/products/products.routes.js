import express from "express";
import asyncWrap from "express-async-wrapper";
import productsController from "./products.controller";
const router = express.Router();

router.get("/", asyncWrap(productsController.productsPage));

export default router;
