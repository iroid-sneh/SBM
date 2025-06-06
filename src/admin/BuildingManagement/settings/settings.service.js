class settingsService {
    /**
     * @description: bussinessdetailsPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async bussinessdetailsPage(req, res) {
        return res.render(
            "adminPanels/buildingManagement/settings/bussinessDetails",
            {
                currentPage: "settings",
                layout: "adminPanels/buildingManagement/layouts/layout",
            }
        );
    }

    /**
     * @description: adminprofilePage for admin
     * @param {*} req
     * @param {*} res
     */
    static async adminprofilePage(req, res) {
        return res.render(
            "adminPanels/buildingManagement/settings/adminProfile",
            {
                currentPage: "settings",
                layout: "adminPanels/buildingManagement/layouts/layout",
            }
        );
    }

    /**
     * @description: subadminPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async subadminPage(req, res) {
        return res.render("adminPanels/buildingManagement/settings/subAdmin", {
            currentPage: "settings",
            layout: "adminPanels/buildingManagement/layouts/layout",
        });
    }

    /**
     * @description: residencedetailsPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async residencedetailsPage(req, res) {
        return res.render(
            "adminPanels/buildingManagement/settings/residenceDetails",
            {
                currentPage: "settings",
                layout: "adminPanels/buildingManagement/layouts/layout",
            }
        );
    }

    /**
     * @description: amenitiesPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async amenitiesPage(req, res) {
        return res.render(
            "adminPanels/buildingManagement/settings/amenities/amenities",
            {
                currentPage: "settings",
                layout: "adminPanels/buildingManagement/layouts/layout",
            }
        );
    }

    /**
     * @description: amenitiesSportsPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async amenitiesSportsPage(req, res) {
        return res.render(
            "adminPanels/buildingManagement/settings/amenities/amenitiesSports",
            {
                currentPage: "settings",
                layout: "adminPanels/buildingManagement/layouts/layout",
            }
        );
    }

    /**
     * @description: amenitiesHallsPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async amenitiesHallsPage(req, res) {
        return res.render(
            "adminPanels/buildingManagement/settings/amenities/amenitiesHalls",
            {
                currentPage: "settings",
                layout: "adminPanels/buildingManagement/layouts/layout",
            }
        );
    }

    /**
     * @description: bankdetailsPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async bankdetailsPage(req, res) {
        return res.render(
            "adminPanels/buildingManagement/settings/bankDetails",
            {
                currentPage: "settings",
                layout: "adminPanels/buildingManagement/layouts/layout",
            }
        );
    }

    /**
     * @description: subscriptionplanPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async subscriptionplanPage(req, res) {
        return res.render(
            "adminPanels/buildingManagement/settings/subscriptionPlan",
            {
                currentPage: "settings",
                layout: "adminPanels/buildingManagement/layouts/layout",
            }
        );
    }
}

export default settingsService;
