class receivedPaymentsServices {
    /**
     * @description: Finance Page
     * @param {*} req
     * @param {*} res
     */
    static async receivedPaymentsPage(req, res) {
        return res.render(
            "adminPanels/superAdmin/finance/receivedPayments/receivedPayments",
            {
                currentPage: "finance",
            }
        );
    }

    /**
     * @description: View Payments Page of Finance
     * @param {*} req
     * @param {*} res
     */
    static async viewPaymentsPage(req, res) {
        return res.render(
            "adminPanels/superAdmin/finance/receivedPayments/totalPayments",
            {
                currentPage: "finance",
            }
        );
    }

    /**
     * @description: release Page of Finance
     * @param {*} req
     * @param {*} res
     */
    static async releasePage(req, res) {
        return res.render(
            "adminPanels/superAdmin/finance/receivedPayments/release",
            {
                currentPage: "finance",
            }
        );
    }
}

export default receivedPaymentsServices;
