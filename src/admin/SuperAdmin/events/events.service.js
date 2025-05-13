class eventsServices {
    /**
     * @description: Events page fot Super Admin
     * @param {*} req
     * @param {*} res
     */
    static async eventsPage(req, res) {
        return (
            res.render("adminPanels/superAdmin/events/events"),
            {
                currentPage: "events",
            }
        );
    }
}

export default eventsServices;
