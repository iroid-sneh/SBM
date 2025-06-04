class eventsServices {
    /**
     * @description: eventsPage for the admin
     * @param {*} req
     * @param {*} res
     */
    static async eventsPage(req, res) {
        return res.render("adminPanels/buildingManagement/events/events", {
            currentPage: "events",
            layout: "adminPanels/buildingManagement/layouts/layout",
        });
    }
}

export default eventsServices;
