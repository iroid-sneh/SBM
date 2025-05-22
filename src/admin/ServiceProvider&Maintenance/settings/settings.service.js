class settingsServices {
    /**
     * @description: bussinessDetailsPage For admin
     * @param {*} req
     * @param {*} res
     */
    static async bussinessDetailsPage(req, res) {
        return res.render(
            "adminPanels/serviceProvider&Maintenance/settings/bussinessDetails",
            {
                currentPage: "settings",
                layout: "adminPanels/serviceProvider&Maintenance/layouts/layout",
            }
        );
    }

    /**
     * @description: adminProfilePage For admin
     * @param {*} req
     * @param {*} res
     */
    static async adminProfilePage(req, res) {
        return res.render(
            "adminPanels/serviceProvider&Maintenance/settings/adminProfile",
            {
                currentPage: "settings",
                layout: "adminPanels/serviceProvider&Maintenance/layouts/layout",
            }
        );
    }

    /**
     * @description: bankDetailsPage For admin
     * @param {*} req
     * @param {*} res
     */
    static async bankDetailsPage(req, res) {
        return res.render(
            "adminPanels/serviceProvider&Maintenance/settings/bankDetails",
            {
                currentPage: "settings",
                layout: "adminPanels/serviceProvider&Maintenance/layouts/layout",
            }
        );
    }

    /**
     * @description: subscriptionPlanPage For admin
     * @param {*} req
     * @param {*} res
     */
    static async subscriptionPlanPage(req, res) {
        return res.render(
            "adminPanels/serviceProvider&Maintenance/settings/subscriptionPlan",
            {
                currentPage: "settings",
                layout: "adminPanels/serviceProvider&Maintenance/layouts/layout",
            }
        );
    }
}

export default settingsServices;
