class reservationsService {
    /**
     * @description: reservationsPage for admin panel
     * @param {*} req
     * @param {*} res
     */
    static async reservationsPage(req, res) {
        return res.render(
            "adminPanels/buildingManagement/reservations/reservations",
            {
                currentPage: "reservations",
                layout: "adminPanels/buildingManagement/layouts/layout",
            }
        );
    }

    /**
     * @description: inMaintenancePage for admin panel
     * @param {*} req
     * @param {*} res
     */
    static async inMaintenancePage(req, res) {
        return res.render(
            "adminPanels/buildingManagement/reservations/inMaintenance",
            {
                currentPage: "reservations",
                Page: "inmaintenance",
                layout: "adminPanels/buildingManagement/layouts/layout",
            }
        );
    }
}

export default reservationsService;
