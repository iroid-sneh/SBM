import express from "express";
import usersRoutes from "./users/users.routes";
import serviceProviderRoutes from "./serviceProvider/serviceProvider.routes";
import buildingManagementRoutes from "./buildingManagement/buildingManagement.routes";
import securityRoutes from "./security/security.routes";
import technicianRoutes from "./technician/technician.routes";
const router = express.Router();

router.use("/users", usersRoutes);

router.use("/service-provider", serviceProviderRoutes);

router.use("/building-management", buildingManagementRoutes);

router.use("/security", securityRoutes);

router.use("/technician", technicianRoutes);

export default router;
