class dashboardServices {
    /**
     * @description: Dashboard Page
     * @param {*} req
     * @param {*} res
     */
    static async dashboardPage(req, res) {
        return res.render(
            "adminPanels/serviceProvider&Maintenance/dashboard/dashboard",
            {
                currentPage: "dashboard",
                layout: "adminPanels/serviceProvider&Maintenance/layouts/layout",
            }
        );
    }
}

export default dashboardServices;
