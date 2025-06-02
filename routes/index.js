import express from "express";
import superAdminRoutes from "../src/admin/SuperAdmin/superAdmin.routes.js";
import serviceAndMaintenanceRoutes from "../src/admin/ServiceProvider&Maintenance/serviceProvider.routes.js";
import buildingManagementAdminRoutes from "../src/admin/BuildingManagement/bm.routes.js";
const router = express.Router();

router.use("/", serviceAndMaintenanceRoutes);

router.use("/superadmin", superAdminRoutes);

router.use("/bmadmin", buildingManagementAdminRoutes);

router.get("/", (req, res) => {
    return res.redirect("/login");
});

router.get("/superadmin", (req, res) => {
    return res.redirect("/superadmin/login");
});
export default router;
