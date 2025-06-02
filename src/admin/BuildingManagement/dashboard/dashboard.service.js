class dashboardService {
    /**
     * @description: dashboardPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async dashboardPage(req, res) {
        return res.render(
            "adminPanels/buildingManagement/dashboard/dashboard",
            {
                currentPage: "dashboard",
                layout: "adminPanels/buildingManagement/layouts/layout",
                // user: {
                //     prefrence: "Service",
                // },
            }
        );
    }
}

export default dashboardService;
