class bmServices {
    /**
     * @description: Login Page for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async loginPage(req, res) {
        return res.render("adminPanels/buildingManagement/login", {
            layout: false,
        });
    }

    /**
     * @description: Login for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async login(req, res) {
        return res.redirect("/bmadmin/bussinessdetails");
    }

    /**
     * @description: bussinessDetailsPage for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async bussinessDetailsPage(req, res) {
        return res.render("adminPanels/buildingManagement/bussinessDetails", {
            layout: false,
        });
    }

    /**
     * @description: adminProfilePage for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async adminProfilePage(req, res) {
        return res.render("adminPanels/buildingManagement/adminProfile", {
            layout: false,
        });
    }

    /**
     * @description: residenceDetailsPage for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async residenceDetailsPage(req, res) {
        return res.render("adminPanels/buildingManagement/residenceDetails", {
            layout: false,
        });
    }

    /**
     * @description: bankDetailsPage for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async bankDetailsPage(req, res) {
        return res.render("adminPanels/buildingManagement/bankDetails", {
            layout: false,
        });
    }

    /**
     * @description: subscriptionDetailsPage for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async subscriptionDetailsPage(req, res) {
        return res.render(
            "adminPanels/buildingManagement/subscriptionDetails",
            {
                layout: false,
            }
        );
    }

    /**
     * @description: reviewDetailsPage for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async reviewDetailsPage(req, res) {
        return res.render("adminPanels/buildingManagement/reviewDetails", {
            layout: false,
        });
    }
}

export default bmServices;
