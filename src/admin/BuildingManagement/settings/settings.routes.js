import express from "express";
import asyncWrap from "express-async-wrapper";
import settingsController from "./settings.controller";
const router = express.Router();

router.get(
    "/bussinessdetails",
    asyncWrap(settingsController.bussinessdetailsPage)
);
router.get("/adminprofile", asyncWrap(settingsController.adminprofilePage));

router.get("/subadmin", asyncWrap(settingsController.subadminPage));

router.get(
    "/residencedetails",
    asyncWrap(settingsController.residencedetailsPage)
);

router.get("/amenities", asyncWrap(settingsController.amenitiesPage));

router.get(
    "/amenities/sports",
    asyncWrap(settingsController.amenitiesSportsPage)
);

router.get(
    "/amenities/halls",
    asyncWrap(settingsController.amenitiesHallsPage)
);

router.get("/bankdetails", asyncWrap(settingsController.bankdetailsPage));

router.get(
    "/subscriptionplan",
    asyncWrap(settingsController.subscriptionplanPage)
);

export default router;
