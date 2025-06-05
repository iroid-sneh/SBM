import express from "express";
import asyncWrap from "express-async-wrapper";
import invoicesController from "./invoices.controller";
const router = express.Router();

router.get('/', asyncWrap(invoicesController.invoicesPage))

export default router;