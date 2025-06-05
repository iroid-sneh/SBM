import maintenanceService from "./maintenance.service";

class maintenanceController {
    /**
     * @description: inReviewPage for the admin maintenance
     * @param {*} req
     * @param {*} res
     */
    static async inReviewPage(req, res) {
        const data = await maintenanceService.inReviewPage(req, res);
        return;
    }

    /**
     * @description: inProcessPage for the admin maintenance
     * @param {*} req
     * @param {*} res
     */
    static async inProcessPage(req, res) {
        const data = await maintenanceService.inProcessPage(req, res);
        return;
    }

    /**
     * @description: executionPage for the admin maintenance
     * @param {*} req
     * @param {*} res
     */
    static async executionPage(req, res) {
        const data = await maintenanceService.executionPage(req, res);
        return;
    }

    /**
     * @description: historyPage for the admin maintenance
     * @param {*} req
     * @param {*} res
     */
    static async historyPage(req, res) {
        const data = await maintenanceService.historyPage(req, res);
        return;
    }
}

export default maintenanceController;
