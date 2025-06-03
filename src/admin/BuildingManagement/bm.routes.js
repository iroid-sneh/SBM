import express from "express";
import asyncWrap from "express-async-wrapper";
import bmController from "./bm.controller";
import dashboardRoutes from "./dashboard/dashboard.routes";
import usersRoutes from "./Users/users.routes";
const router = express.Router();

router.get("/", asyncWrap(bmController.loginPage));

router.post("/", asyncWrap(bmController.login));

router.get("/bussinessdetails", asyncWrap(bmController.bussinessDetailsPage));

router.get("/adminprofile", asyncWrap(bmController.adminProfilePage));

router.get("/residencedetails", asyncWrap(bmController.residenceDetailsPage));

router.get("/bankdetails", asyncWrap(bmController.bankDetailsPage));

router.get(
    "/subscriptiondetails",
    asyncWrap(bmController.subscriptionDetailsPage)
);

router.get("/notification", asyncWrap(bmController.notificationPage));

router.get("/reviewdetails", asyncWrap(bmController.reviewDetailsPage));

router.use("/dashboard", dashboardRoutes);

router.use("/users", usersRoutes);

export default router;
