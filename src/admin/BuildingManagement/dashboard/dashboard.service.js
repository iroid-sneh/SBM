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
                total: 42,
                completed: 30,
                underReview: 9,
                reported: 3,
            }
        );
    }
}

export default dashboardService;
