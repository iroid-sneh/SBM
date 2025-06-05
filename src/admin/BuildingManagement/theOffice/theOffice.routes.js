import express from "express";
import asyncWrap from "express-async-wrapper";
import theOfficeController from "./theOffice.controller";
const router = express.Router();

router.get("/documents", asyncWrap(theOfficeController.documentsPage));

router.get(
    "/documents/officedocuments",
    asyncWrap(theOfficeController.officeDocumentsPage)
);

router.get("/election", asyncWrap(theOfficeController.electionPage));

router.get("/nomination", asyncWrap(theOfficeController.nominationPage));

router.get("/ownersassociation", asyncWrap(theOfficeController.OwnersAssociationPage));

export default router;
