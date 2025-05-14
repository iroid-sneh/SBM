import express from "express";
import asyncWrap from "express-async-wrapper";
import settingsController from "./settings.controller";
const router = express.Router();

router.get(
    "/personal-details",
    asyncWrap(settingsController.personalDetailsPage)
);

router.get("/bank-details", asyncWrap(settingsController.bankDetailsPage));

router.get("/sub-admin", asyncWrap(settingsController.subAdminPage));

router.get(
    "/commission-details",
    asyncWrap(settingsController.commissionDetailsPage)
);

router.get("/emergency-numbers", asyncWrap(settingsController.emergencyNumbersPage));

router.get("/live-support", asyncWrap(settingsController.liveSupportPage));

export default router;
