import express from "express";
import asyncWrap from "express-async-wrapper";
import serviceProviderController from "./serviceProvider.controller";
import dashboardRoutes from "./dashboard/dashboard.routes";
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

router.use("/dashboard", dashboardRoutes);

export default router;
