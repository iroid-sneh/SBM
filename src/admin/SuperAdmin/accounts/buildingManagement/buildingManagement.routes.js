import express from "express";
import asyncWrap from "express-async-wrapper";
import buildingManagementController from "./buildingManagement.controller";
const router = express.Router();

router.get(
    "/",
    asyncWrap(buildingManagementController.getBuildingManagementPage)
);

router.get("/new-requests", buildingManagementController.newRequestsPage);

router.get(
    "/previous-requests",
    buildingManagementController.previousRequestsPage
);

export default router;
