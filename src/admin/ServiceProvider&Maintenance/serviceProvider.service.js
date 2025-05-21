class serviceProviderServices {
    /**
     * @description: Service Provider Login page For Admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async loginPage(req, res) {
        return res.render("adminPanels/serviceProvider&Maintenance/login", {
            layout: false,
        });
    }

    /**
     * @description: Service Provider Sign up [adminprofile] page For Admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async adminprofilePage(req, res) {
        return res.render(
            "adminPanels/serviceProvider&Maintenance/adminProfile",
            {
                layout: false,
            }
        );
    }

    /**
     * @description: Service Provider Sign up [bussinessdetails] page For Admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async bussinessdetailsPage(req, res) {
        return res.render(
            "adminPanels/serviceProvider&Maintenance/bussinessDetails",
            {
                layout: false,
            }
        );
    }

    /**
     * @description: Service Provider Sign up [bankdetails] page For Admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async bankdetailsPage(req, res) {
        return res.render(
            "adminPanels/serviceProvider&Maintenance/bankDetails",
            {
                layout: false,
            }
        );
    }

    /**
     * @description: Service Provider Sign up [choosePlan] page For Admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async choosePlanPage(req, res) {
        return res.render(
            "adminPanels/serviceProvider&Maintenance/choosePlan",
            {
                layout: false,
            }
        );
    }

    /**
     * @description: Service Provider Sign up [reviewDetails] page For Admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async reviewDetailsPage(req, res) {
        return res.render(
            "adminPanels/serviceProvider&Maintenance/reviewDetails",
            {
                layout: false,
            }
        );
    }

    /**
     * @description: notificationsPage
     * @param {*} req
     * @param {*} res
     */
    static async notificationsPage(req, res) {
        return res.render(
            "adminPanels/serviceProvider&Maintenance/notifications",
            {
                currentPage: null,
                layout: "adminPanels/serviceProvider&Maintenance/layouts/layout",
            }
        );
    }
}

export default serviceProviderServices;
