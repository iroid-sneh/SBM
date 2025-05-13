import express from "express";
import asyncWrap from "express-async-wrapper";
import technicianController from "./technician.controller";
const router = express.Router();

router.get("/", asyncWrap(technicianController.technicianPage));

export default router;
