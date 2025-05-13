class maintenanceServices {
    /**
     * @description: maintenance page for super admin
     * @param {*} req
     * @param {*} res
     */
    static async maintenancePage(req, res) {
        return (
            res.render("adminPanels/superAdmin/maintenance/maintenance"),
            {
                currentPage: "maintenance",
            }
        );
    }
}

export default maintenanceServices;
