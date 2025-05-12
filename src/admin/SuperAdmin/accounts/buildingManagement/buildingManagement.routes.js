import express from "express";
import asyncWrap from "express-async-wrapper";
import buildingManagementController from "./buildingManagement.controller";
const router = express.Router();

router.get(
    "/",
    asyncWrap(buildingManagementController.getBuildingManagementPage)
);

export default router;
