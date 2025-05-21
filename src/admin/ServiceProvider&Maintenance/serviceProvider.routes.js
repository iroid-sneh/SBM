import express from "express";
import asyncWrap from "express-async-wrapper";
import serviceProviderController from "./serviceProvider.controller";
import dashboardRoutes from "./dashboard/dashboard.routes";
import requestsRoutes from "./requests/requests.routes";
import feedbackRoutes from "./feedback/feedback.routes";
import productsRoutes from "./products/products.routes";
import calendarRoutes from "./calendar/calendar.routes";
const router = express.Router();

router.get("/login", asyncWrap(serviceProviderController.loginPage));

router.get(
    "/adminprofile",
    asyncWrap(serviceProviderController.adminprofilePage)
);

router.get(
    "/bussinessdetails",
    asyncWrap(serviceProviderController.bussinessdetailsPage)
);

router.get(
    "/bankdetails",
    asyncWrap(serviceProviderController.bankdetailsPage)
);

router.get("/chooseplan", asyncWrap(serviceProviderController.choosePlanPage));

router.get(
    "/reviewdetails",
    asyncWrap(serviceProviderController.reviewDetailsPage)
);

router.get(
    "/spadmin/notifications",
    asyncWrap(serviceProviderController.notificationsPage)
);

router.use("/spadmin/dashboard", dashboardRoutes);

router.use("/spadmin/requests", requestsRoutes);

router.use("/spadmin/feedback", feedbackRoutes);

router.use("/spadmin/products", productsRoutes);

router.use("/spadmin/calendar", calendarRoutes);

export default router;
