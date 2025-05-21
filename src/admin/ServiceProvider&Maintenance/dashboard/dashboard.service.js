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

    /**
     * @description: TransactionsHistory Page
     * @param {*} req
     * @param {*} res
     */
    static async transactionsHistoryPage(req, res) {
        return res.render(
            "adminPanels/serviceProvider&Maintenance/dashboard/transactionsHistory",
            {
                currentPage: "dashboard",
                layout: "adminPanels/serviceProvider&Maintenance/layouts/layout",
            }
        );
    }
}

export default dashboardServices;
