class calendarServices {
    /**
     * @description: calendarPage for Admin
     * @param {*} req
     * @param {*} res
     */
    static async calendarPage(req, res) {
        return res.render(
            "adminPanels/serviceProvider&Maintenance/calendar/calendar",
            {
                currentPage: "calendar",
                layout: "adminPanels/serviceProvider&Maintenance/layouts/layout",
            }
        );
    }
}

export default calendarServices;
