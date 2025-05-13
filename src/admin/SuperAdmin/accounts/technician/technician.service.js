class technicianServices {
    /**
     * @description: technician page for Accounts Page
     * @param {*} req
     * @param {*} res
     */
    static async technicianPage(req, res) {
        return (
            res.render("adminPanels/superAdmin/accounts/technician/technician"),
            {
                currentPage: "accounts",
            }
        );
    }
}

export default technicianServices;
