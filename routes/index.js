import express from "express";
import adminRoutes from "../src/admin/admin.routes.js";
import superAdminRoutes from "../src/admin/SuperAdmin/superAdmin.routes.js";
const router = express.Router();

router.use("/admin", adminRoutes);

router.use("/super-admin", superAdminRoutes);

router.get("/admin", (req, res) => {
    return res.redirect("/admin/login");
});

router.get("/super-admin", (req, res) => {
    return res.redirect("/super-admin/login");
});
export default router;
