class eventPaymentsServices {
    /**
     * @description: Events Payments Page
     * @param {*} req
     * @param {*} res
     */
    static async eventPaymentsPage(req, res) {
        return res.render(
            "adminPanels/superAdmin/finance/eventPayments/eventPayments",
            {
                currentPage: "finance",
            }
        );
    }

    /**
     * @description: releasePage of Events Payments
     * @param {*} req
     * @param {*} res
     */
    static async releasePage(req, res) {
        return res.render(
            "adminPanels/superAdmin/finance/eventPayments/release",
            {
                currentPage: "finance",
            }
        );
    }
}

export default eventPaymentsServices;
