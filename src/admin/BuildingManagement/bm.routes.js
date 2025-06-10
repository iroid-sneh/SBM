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
import storeFiles from "../../common/middleware/storeFiles";
import { ensureSignupStep } from "../../common/middleware/ensureSignupStep";
const router = express.Router();

router.get("/login", asyncWrap(bmController.loginPage));

router.post("/login", asyncWrap(bmController.login));

router.get("/bussinessdetails", asyncWrap(bmController.bussinessDetailsPage));

router.post(
    "/bussinessdetails/step1",
    storeFiles("public/BMadmin", "businessLogo", "single"),
    asyncWrap(bmController.bussinessDetails)
);

router.get("/adminprofile", asyncWrap(bmController.adminProfilePage));

router.post(
    "/adminprofile/step2",
    ensureSignupStep(2),
    storeFiles("public/BMadmin", "adminProfilePhoto", "single"),
    asyncWrap(bmController.adminProfile)
);

router.post("/verifyotp", asyncWrap(bmController.verifyOtp));

router.post("/resendotp", asyncWrap(bmController.resendOtp));

router.get("/residencedetails", asyncWrap(bmController.residenceDetailsPage));

router.post(
    "/residencedetails/step3",
    storeFiles(
        "public/BMadmin",
        {
            first: "residencePolicies",
            second: "emergencyExits",
            third: "fireExtingushierLocations",
        },
        "fields"
    ),
    ensureSignupStep(3),
    asyncWrap(bmController.residenceDetails)
);

router.get("/bankdetails", asyncWrap(bmController.bankDetailsPage));

router.post(
    "/bankdetails/step4",
    ensureSignupStep(4),
    asyncWrap(bmController.bankDetails)
);

router.get(
    "/subscriptiondetails",
    asyncWrap(bmController.subscriptionDetailsPage)
);

router.post(
    "/subscriptiondetails/step5",
    ensureSignupStep(5),
    asyncWrap(bmController.subscriptionDetails)
);

router.get("/notification", asyncWrap(bmController.notificationPage));

router.get("/reviewdetails", asyncWrap(bmController.reviewDetailsPage));

router.post("/reviewdetails", asyncWrap(bmController.reviewDetails));

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
