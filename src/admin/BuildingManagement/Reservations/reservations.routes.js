import express from "express";
import asyncWrap from "express-async-wrapper";
import reservationsController from "./reservations.controller";
const router = express.Router();

router.get("/", asyncWrap(reservationsController.reservationsPage));

router.get("/inmaintenance", asyncWrap(reservationsController.inMaintenancePage))

export default router;
