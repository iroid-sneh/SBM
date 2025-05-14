import express from "express";
import asyncWrap from "express-async-wrapper";
import superAdminController from "./superAdmin.controller";
import financeRoutes from "./finance/finance.routes";
import accountsRoutes from "./accounts/accounts.routes";
import invoicesRoutes from "./invoices/invoices.routes";
import ServicesRoutes from "./services/services.routes";
import maintenanceRoutes from "./maintenance/maintenance.routes";
import eventsRoutes from "./events/events.routes";
import advertisementRoutes from "./advertisement/advertisement.routes";
import pushNotificationRoutes from "./pushNotification/pushNotification.routes";
import feedbackRoutes from "./feedback/feedback.routes";
import rewardsRoutes from "./rewards/rewards.routes";
import settingsRoutes from "./settings/settings.routes";
const router = express.Router();

router.get("/login", asyncWrap(superAdminController.loginPage));

router.post("/login", asyncWrap(superAdminController.login));

router.get("/dashboard", asyncWrap(superAdminController.dashboardPage));

router.use("/finance", financeRoutes);

router.use("/accounts", accountsRoutes);

router.use("/invoices", invoicesRoutes);

router.use("/services", ServicesRoutes);

router.use("/maintenance", maintenanceRoutes);

router.use("/events", eventsRoutes);

router.use("/advertisement", advertisementRoutes);

router.use("/push-notification", pushNotificationRoutes);

router.use("/feedback", feedbackRoutes);

router.use("/rewards", rewardsRoutes);

router.use("/settings", settingsRoutes);

export default router;
