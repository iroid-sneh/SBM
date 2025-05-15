import express from "express";
import asyncWrap from "express-async-wrapper";
import serviceProviderController from "./serviceProvider.controller";
const router = express.Router();

router.get("/login", asyncWrap(serviceProviderController.loginPage));

export default router;
