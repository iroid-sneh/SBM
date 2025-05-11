import express from "express";
import receivedPaymentsRoutes from "./receivedPayments/receivedPayments.routes";
import rentServicesRoutes from "./rentServices/rentServices.routes";
import eventPaymentsRoutes from "./eventPayments/eventPayments.routes";
const router = express.Router();

router.use("/received-payments", receivedPaymentsRoutes);

router.use("/rent-services", rentServicesRoutes);

router.use("/event-payments", eventPaymentsRoutes);

export default router;
