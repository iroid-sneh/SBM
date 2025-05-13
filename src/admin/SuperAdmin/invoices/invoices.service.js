class invoicesServices {
    /**
     * @description: Invoices Page
     * @param {*} req
     * @param {*} res
     */
    static async invoicesPage(req, res) {
        return (
            res.render("adminPanels/superAdmin/invoices/invoices"),
            {
                currentPage: "invoices",
            }
        );
    }
}

export default invoicesServices;
