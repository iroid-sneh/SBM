import express from "express";
import asyncWrap from "express-async-wrapper";
const router = express.Router();

router.get("/", asyncWrap());

export default router;
