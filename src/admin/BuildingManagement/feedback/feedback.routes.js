import express from "express";
import asyncWrap from "express-async-wrapper";
import feedbackController from "./feedback.controller";
const router = express.Router();

router.get('/', asyncWrap(feedbackController.feedbackPage))

export default router;