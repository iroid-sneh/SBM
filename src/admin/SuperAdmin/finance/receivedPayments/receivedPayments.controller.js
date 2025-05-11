import receivedPaymentsServices from "./receivedPayments.service";

class receivedPaymentController {
    /**
     * @description: Fianance Page for Super Admin
     * @param {*} req
     * @param {*} res
     */
    static async receivedPaymentsPage(req, res) {
        const data = await receivedPaymentsServices.receivedPaymentsPage(
            req,
            res
        );
        return;
    }

    /**
     * @description: View Payments Page for finance
     * @param {*} req
     * @param {*} res
     */
    static async viewPaymentsPage(req, res) {
        const data = await receivedPaymentsServices.viewPaymentsPage(req, res);
        return;
    }

    /**
     * @description: release Page for finance
     * @param {*} req
     * @param {*} res
     */
    static async releasePage(req, res) {
        const data = await receivedPaymentsServices.releasePage(req, res);
        return;
    }
}

export default receivedPaymentController;
