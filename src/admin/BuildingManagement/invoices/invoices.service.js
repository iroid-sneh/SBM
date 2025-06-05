class invoicesServices {
    /**
     * @description: invoicesPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async invoicesPage(req, res) {
        return res.render("adminPanels/buildingManagement/invoices/invoices", {
            currentPage: "invoices",
            layout: "adminPanels/buildingManagement/layouts/layout",
        });
    }
}

export default invoicesServices;
