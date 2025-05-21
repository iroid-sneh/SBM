class requestsServices {
    /**
     * @description: requests Page for admin
     * @param {*} req
     * @param {*} res
     */
    static async requestsPage(req, res) {
        return res.render(
            "adminPanels/serviceProvider&Maintenance/requests/requests",
            {
                currentPage: "requests",
                layout: "adminPanels/serviceProvider&Maintenance/layouts/layout",
            }
        );
    }
}

export default requestsServices;
