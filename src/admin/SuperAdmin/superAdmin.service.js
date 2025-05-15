class superAdminServices {
    /**
     * @description: Super admin login page
     * @param {*} req
     * @param {*} res
     */
    static async loginPage(req, res) {
        return res.render("adminPanels/superAdmin/login");
    }

    /**
     * @description: Super Admin Login
     * @param {*} data
     * @param {*} req
     * @param {*} res
     */
    static async login(data, req, res) {
        return res.redirect("/superadmin/dashboard");
    }

    /**
     * @description: Super admin dashboard page
     * @param {*} req
     * @param {*} res
     */
    static async dashboardPage(req, res) {
        return res.render("adminPanels/superAdmin/dashboard", {
            currentPage: "dashboard",
        });
    }
}

export default superAdminServices;
