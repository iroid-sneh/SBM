import express from "express";
import asyncWrap from "express-async-wrapper";
import settingsController from "./settings.controller";
const router = express.Router();

router.get(
    "/bussinessdetails",
    asyncWrap(settingsController.bussinessDetailsPage)
);

router.get("/adminprofile", asyncWrap(settingsController.adminProfilePage));

router.get("/bankdetails", asyncWrap(settingsController.bankDetailsPage));

router.get("/subscriptionplan", asyncWrap(settingsController.subscriptionPlanPage));

export default router;
