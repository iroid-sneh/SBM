import express from "express";
import asyncWrap from "express-async-wrapper";
import superAdminController from "./superAdmin.controller";
import financeRoutes from "./finance/finance.routes";
import accountsRoutes from "./accounts/accounts.routes";
import invoicesRoutes from "./invoices/invoices.routes";
import ServicesRoutes from "./services/services.routes";
import maintenanceRoutes from "./maintenance/maintenance.routes";
import eventsRoutes from "./events/events.routes";
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

// router.use(
//     "/advertisement",
//     asyncWrap(superAdminController.advertisementsPage)
// );

// router.use(
//     "/push-notification",
//     asyncWrap(superAdminController.pushNotificationPage)
// );

// router.use("/feedback", asyncWrap(superAdminController.feedbackPage));

// router.use("/rewards", asyncWrap(superAdminController.rewardsPage));

// router.use("/settings", asyncWrap(superAdminController.settingsPage));

export default router;
