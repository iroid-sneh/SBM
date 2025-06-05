import express from "express";
import asyncWrap from "express-async-wrapper";
import bmController from "./bm.controller";
import dashboardRoutes from "./dashboard/dashboard.routes";
import usersRoutes from "./Users/users.routes";
import eventsRoutes from "./events/events.routes";
import reservationsRoutes from "./Reservations/reservations.routes";
import securityRoutes from "./security/security.routes";
import maintenanceRoutes from "./maintenance/maintenance.routes";
import theOfficeRoutes from "./theOffice/theOffice.routes";
import invoicesRoutes from "./invoices/invoices.routes";
import pushNotificationRoutes from "./pushNotification/pushNotification.routes";
import feedbackRoutes from "./feedback/feedback.routes";
import settingsRoutes from "./settings/settings.routes";
import faqsRoutes from "./FAQ's/FAQ's.routes";
const router = express.Router();

router.get("/", asyncWrap(bmController.loginPage));

router.post("/", asyncWrap(bmController.login));

router.get("/bussinessdetails", asyncWrap(bmController.bussinessDetailsPage));

router.get("/adminprofile", asyncWrap(bmController.adminProfilePage));

router.get("/residencedetails", asyncWrap(bmController.residenceDetailsPage));

router.get("/bankdetails", asyncWrap(bmController.bankDetailsPage));

router.get(
    "/subscriptiondetails",
    asyncWrap(bmController.subscriptionDetailsPage)
);

router.get("/notification", asyncWrap(bmController.notificationPage));

router.get("/reviewdetails", asyncWrap(bmController.reviewDetailsPage));

router.use("/dashboard", dashboardRoutes);

router.use("/users", usersRoutes);

router.use("/events", eventsRoutes);

router.use("/reservations", reservationsRoutes);

router.use("/security", securityRoutes);

router.use("/maintenance", maintenanceRoutes);

router.use("/theoffice", theOfficeRoutes);

router.use("/invoices", invoicesRoutes);

router.use("/pushnotification", pushNotificationRoutes);

router.use("/feedback", feedbackRoutes);

router.use("/settings", settingsRoutes);

router.use("/faqs", faqsRoutes);

export default router;
