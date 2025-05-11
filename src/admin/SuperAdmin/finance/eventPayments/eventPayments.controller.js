import eventPaymentsServices from "./eventPayments.service";

class eventPaymentsController {
    /**
     * @description: event Payments Page
     * @param {*} req
     * @param {*} res
     */
    static async eventPaymentsPage(req, res) {
        const data = await eventPaymentsServices.eventPaymentsPage(req, res);
        return;
    }

    /**
     * @description: releasePage of event Payments
     * @param {*} req
     * @param {*} res
     */
    static async releasePage(req, res) {
        const data = await eventPaymentsServices.releasePage(req, res);
        return;
    }
}

export default eventPaymentsController;
