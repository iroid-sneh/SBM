class serviceProviderServices {
    /**
     * @description: Service Provider Login page For Admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async loginPage(req, res) {
        return res.render("adminPanels/serviceProvider&Maintenance/login");
    }
}

export default serviceProviderServices;
