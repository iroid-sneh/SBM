import express from "express";
import asyncWrap from "express-async-wrapper";
import usersController from "./users.controller";
import storeFiles from "../../../common/middleware/storeFiles";
const router = express.Router();

router.get("/residentowner", asyncWrap(usersController.residentOwnerPage));

router.post(
    "/residentowner",
    storeFiles(
        "public/users",
        {
            first: "personalPhoto",
            second: "agreementPdf",
        },
        "fields"
    ),
    asyncWrap(usersController.addResidentOwners)
);

router.get(
    "/residentowner/list",
    asyncWrap(usersController.residentOwnersList)
);

router.put(
    "/residentowner/:id",
    storeFiles(
        "public/users",
        {
            first: "personalPhoto",
            second: "agreementPdf",
        },
        "fields"
    ),
    asyncWrap(usersController.updateResidentOwner)
);

router.delete(
    "/residentowner/:id",
    asyncWrap(usersController.deleteResidentOwner)
);

router.get("/security", asyncWrap(usersController.securityPage));

router.post("/security", asyncWrap(usersController.addSecurity));

router.get("/technician", asyncWrap(usersController.technicianPage));

export default router;
