import express from "express";
import asyncWrap from "express-async-wrapper";
import requestsController from "./requests.controller";
const router = express.Router();

router.get("/", asyncWrap(requestsController.requestsPage));

export default router;
