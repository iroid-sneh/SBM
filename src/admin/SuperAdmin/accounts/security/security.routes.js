import express from "express";
import asyncWrap from "express-async-wrapper";
import securityController from "./security.controller";
const router = express.Router();

router.get("/", asyncWrap(securityController.securityPage));

export default router;
