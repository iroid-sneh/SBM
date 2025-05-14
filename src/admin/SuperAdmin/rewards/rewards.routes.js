import express from "express";
import asyncWrap from "express-async-wrapper";
import rewardsController from "./rewards.controller";
const router = express.Router();

router.get("/nomination", asyncWrap(rewardsController.rewardsPage));

router.get("/coupons", asyncWrap(rewardsController.couponsPage));

router.get("/promocode", asyncWrap(rewardsController.promoCodePage));

export default router;
