class technicianServices {
    /**
     * @description: technicianPage for Admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async technicianPage(req, res) {
        return res.render(
            "adminPanels/serviceProvider&Maintenance/technician/technician",
            {
                currentPage: "technician",
                layout: "adminPanels/serviceProvider&Maintenance/layouts/layout",
            }
        );
    }
}

export default technicianServices;
