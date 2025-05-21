import dashboardServices from "./dashboard.service";

class dashboardController {
    /**
     * @description: Dashboard Page for Service Provider
     * @param {*} req
     * @param {*} res
     */
    static async dashboardPage(req, res) {
        const data = await dashboardServices.dashboardPage(req, res);
        return;
    }

    /**
     * @description: Transection History of Dashboard Page for Service Provider
     * @param {*} req
     * @param {*} res
     */
    static async transactionsHistoryPage(req, res) {
        const data = await dashboardServices.transactionsHistoryPage(req, res);
        return;
    }

    /**
     * @description: Transection History of Dashboard Page for Service Provider
     * @param {*} req
     * @param {*} res
     */
    static async transactionsHistoryPage(req, res) {
        const data = await dashboardServices.transactionsHistoryPage(req, res);
        return;
    }
}

export default dashboardController;
