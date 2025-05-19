class serviceProviderServices {
    /**
     * @description: Service Provider Login page For Admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async loginPage(req, res) {
        return res.render("adminPanels/serviceProvider&Maintenance/login");
    }

    /**
     * @description: Service Provider Sign up [adminprofile] page For Admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async adminprofilePage(req, res) {
        return res.render(
            "adminPanels/serviceProvider&Maintenance/adminProfile"
        );
    }

    /**
     * @description: Service Provider Sign up [bussinessdetails] page For Admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async bussinessdetailsPage(req, res) {
        return res.render(
            "adminPanels/serviceProvider&Maintenance/bussinessDetails"
        );
    }

    /**
     * @description: Service Provider Sign up [bankdetails] page For Admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async bankdetailsPage(req, res) {
        return res.render(
            "adminPanels/serviceProvider&Maintenance/bankDetails"
        );
    }

    /**
     * @description: Service Provider Sign up [choosePlan] page For Admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async choosePlanPage(req, res) {
        return res.render("adminPanels/serviceProvider&Maintenance/choosePlan");
    }

    /**
     * @description: Service Provider Sign up [reviewDetails] page For Admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async reviewDetailsPage(req, res) {
        return res.render(
            "adminPanels/serviceProvider&Maintenance/reviewDetails"
        );
    }
}

export default serviceProviderServices;
