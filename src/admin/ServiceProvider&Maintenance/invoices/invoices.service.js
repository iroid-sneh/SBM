class invoicesServices {
    /**
     * @description: invoicesPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async invoicesPage(req, res) {
        return res.render(
            "adminPanels/serviceProvider&Maintenance/invoices/invoices",
            {
                currentPage: "invoices",
                layout: "adminPanels/serviceProvider&Maintenance/layouts/layout",
            }
        );
    }
}

export default invoicesServices;
