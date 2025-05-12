import express from "express";
import asyncWrap from "express-async-wrapper";
import serviceProviderController from "./serviceProvider.controller";
const router = express.Router();

router.get("/", asyncWrap(serviceProviderController.serviceProviderPage));

router.get(
    "/new-requests",
    asyncWrap(serviceProviderController.newRequestsPage)
);

router.get(
    "/previous-requests",
    asyncWrap(serviceProviderController.previousRequestsPage)
);

export default router;
