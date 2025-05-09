import express from "express";
import asyncWrap from "express-async-wrapper";
import superAdminController from "./superAdmin.controller";
const router = express.Router();

router.get("/login", asyncWrap(superAdminController.loginPage));

router.post("/login", asyncWrap(superAdminController.login));

router.get("/dashboard", asyncWrap(superAdminController.dashboardPage));

router.get("/finance", asyncWrap(superAdminController.financePage));

router.get("/accounts", asyncWrap(superAdminController.accountsPage));

router.get("/invoices", asyncWrap(superAdminController.invoicesPage));

router.get("/services", asyncWrap(superAdminController.servicesPage));

router.get("/maintenance", asyncWrap(superAdminController.maintenancePage));

router.get("/events", asyncWrap(superAdminController.eventsPage));

router.get(
    "/advertisement",
    asyncWrap(superAdminController.advertisementsPage)
);

router.get(
    "/push-notification",
    asyncWrap(superAdminController.pushNotificationPage)
);

router.get("/feedback", asyncWrap(superAdminController.feedbackPage));

router.get("/rewards", asyncWrap(superAdminController.rewardsPage));

router.get("/settings", asyncWrap(superAdminController.settingsPage));

export default router;
