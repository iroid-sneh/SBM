class servicesOfServices {
    /**
     * @description: Services page for Super admin
     * @param {*} req
     * @param {*} res
     */
    static async servicesPage(req, res) {
        return (
            res.render("adminPanels/superAdmin/services/services"),
            {
                currentPage: "services",
            }
        );
    }
}

export default servicesOfServices;
