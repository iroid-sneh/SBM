import express from "express";
import asyncWrap from "express-async-wrapper";
import FAQsController from "./FAQs.controller";
const router = express.Router();

router.get(
    "/generalinformation",
    asyncWrap(FAQsController.generalInformationPage)
);

router.get("/guidelines", asyncWrap(FAQsController.guidelinesPage));

router.get("/termsandpolicies", asyncWrap(FAQsController.termsAndPolicesPage));

router.get(
    "/accountandprofile",
    asyncWrap(FAQsController.accountAndProfilePage)
);

router.get(
    "/billingandsubscription",
    asyncWrap(FAQsController.billingAndSubscriptionPage)
);

router.get("/livesupport", asyncWrap(FAQsController.liveSupportPage))

export default router;
