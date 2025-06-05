import express from "express";
import asyncWrap from "express-async-wrapper";
import FAQController from "./FAQ's.controller";
const router = express.Router();

router.get(
    "/generalinformation",
    asyncWrap(FAQController.generalinformationPage)
);

router.get("/guidelines", asyncWrap(FAQController.guidelinesPage));

router.get(
    "/termsandpolicies",
    asyncWrap(FAQController.termsandpoliciesPage)
);

router.get(
    "/accountandprofile",
    asyncWrap(FAQController.accountandprofilePage)
);

router.get(
    "/billingandsubscription",
    asyncWrap(FAQController.billingandsubscriptionPage)
);

router.get("/livesupport", asyncWrap(FAQController.livesupportPage));

export default router;
