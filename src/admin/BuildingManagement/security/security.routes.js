import express from "express";
import asyncWrap from "express-async-wrapper";
import securityController from "./security.controller";
const router = express.Router();

router.get("/cases", asyncWrap(securityController.casesPage));

router.get("/visitors", asyncWrap(securityController.visitorsPage));

export default router;
