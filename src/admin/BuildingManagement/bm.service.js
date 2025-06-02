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
}

export default bmServices;
