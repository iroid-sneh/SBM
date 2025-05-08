import express from "express";
import asyncWrap from "express-async-wrapper";
import superAdminController from "./superAdmin.controller";
const router = express.Router();

router.get("/login", asyncWrap(superAdminController.loginPage));

router.post("/login", asyncWrap(superAdminController.login));

router.get("/dashboard", asyncWrap(superAdminController.dashboardPage));

export default router;
