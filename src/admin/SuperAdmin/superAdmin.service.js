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
        return res.redirect("/super-admin/dashboard");
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

    /**
     * @description: Page
     * @param {*} req
     * @param {*} res
     */
    static async invoicesPage(req, res) {
        return res.render("adminPanels/superAdmin/invoices", {
            currentPage: "invoices",
        });
    }

    /**
     * @description: Page
     * @param {*} req
     * @param {*} res
     */
    static async servicesPage(req, res) {
        return res.render("adminPanels/superAdmin/services", {
            currentPage: "services",
        });
    }

    /**
     * @description: Page
     * @param {*} req
     * @param {*} res
     */
    static async maintenancePage(req, res) {
        return res.render("adminPanels/superAdmin/maintenance", {
            currentPage: "maintenance",
        });
    }

    /**
     * @description: Page
     * @param {*} req
     * @param {*} res
     */
    static async eventsPage(req, res) {
        return res.render("adminPanels/superAdmin/events", {
            currentPage: "events",
        });
    }

    /**
     * @description: Page
     * @param {*} req
     * @param {*} res
     */
    static async advertisementsPage(req, res) {
        return res.render("adminPanels/superAdmin/advertisements", {
            currentPage: "advertisements",
        });
    }

    /**
     * @description: Page
     * @param {*} req
     * @param {*} res
     */
    static async pushNotificationPage(req, res) {
        return res.render("adminPanels/superAdmin/pushNotification", {
            currentPage: "push-notification",
        });
    }

    /**
     * @description: Page
     * @param {*} req
     * @param {*} res
     */
    static async feedbackPage(req, res) {
        return res.render("adminPanels/superAdmin/feedback", {
            currentPage: "feedback",
        });
    }

    /**
     * @description: Page
     * @param {*} req
     * @param {*} res
     */
    static async rewardsPage(req, res) {
        return res.render("adminPanels/superAdmin/rewards", {
            currentPage: "rewards",
        });
    }

    /**
     * @description: Page
     * @param {*} req
     * @param {*} res
     */
    static async settingsPage(req, res) {
        return res.render("adminPanels/superAdmin/settings", {
            currentPage: "settings",
        });
    }
}

export default superAdminServices;
