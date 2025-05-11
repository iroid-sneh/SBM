import express from "express";
import asyncWrap from "express-async-wrapper";
import receivedPaymentController from "./receivedPayments.controller";
const router = express.Router();

router.get("/", asyncWrap(receivedPaymentController.receivedPaymentsPage));

router.get(
    "/view-payments",
    asyncWrap(receivedPaymentController.viewPaymentsPage)
);

router.get("/release", asyncWrap(receivedPaymentController.releasePage));

export default router;
