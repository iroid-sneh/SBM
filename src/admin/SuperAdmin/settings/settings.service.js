class settingsServices {
    /**
     * @description: Settings Page for Super Admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async personalDetailsPage(req, res) {
        return (
            res.render("adminPanels/superAdmin/settings/personalDetails"),
            {
                currentPage: "settings",
            }
        );
    }

    /**
     * @description: Settings Page for Super Admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async bankDetailsPage(req, res) {
        return (
            res.render("adminPanels/superAdmin/settings/bankDetails"),
            {
                currentPage: "settings",
            }
        );
    }

    /**
     * @description: Settings Page for Super Admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async subAdminPage(req, res) {
        return (
            res.render("adminPanels/superAdmin/settings/subAdmin"),
            {
                currentPage: "settings",
            }
        );
    }

    /**
     * @description: Settings Page for Super Admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async commissionDetailsPage(req, res) {
        return (
            res.render("adminPanels/superAdmin/settings/commissionDetails"),
            {
                currentPage: "settings",
            }
        );
    }

    /**
     * @description: Settings Page for Super Admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async emergencyNumbersPage(req, res) {
        return res.render("adminPanels/superAdmin/settings/emergencyNumbers", {
            currentPage: "settings",
            emergencyFile: null,
        });
    }

    /**
     * @description: Settings Page for Super Admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async liveSupportPage(req, res) {
        return (
            res.render("adminPanels/superAdmin/settings/liveSupport"),
            {
                currentPage: "settings",
            }
        );
    }
}

export default settingsServices;
