import express from "express";
import asyncWrap from "express-async-wrapper";
import userController from "./users.controller";
const router = express.Router();

router.get("/", asyncWrap(userController.usersPage));

export default router;
