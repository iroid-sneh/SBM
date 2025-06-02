import express from "express";
import asyncWrap from "express-async-wrapper";
import bmController from "./bm.controller";
import dashboardRoutes from "./dashboard/dashboard.routes";
const router = express.Router();

router.get("/", asyncWrap(bmController.loginPage));

router.post("/", asyncWrap(bmController.login));

router.get("/bussinessdetails", asyncWrap(bmController.bussinessDetailsPage));

router.get("/adminprofile", asyncWrap(bmController.adminProfilePage));

router.get("/residencedetails", asyncWrap(bmController.residenceDetailsPage));

router.use("/dashboard", dashboardRoutes);

export default router;
