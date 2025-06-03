import express from "express";
import asyncWrap from "express-async-wrapper";
import usersController from "./users.controller";
const router = express.Router();

router.get("/residentowner", asyncWrap(usersController.residentOwnerPage));

router.get("/security", asyncWrap(usersController.securityPage));

export default router;
