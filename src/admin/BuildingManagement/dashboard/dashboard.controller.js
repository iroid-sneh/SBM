import dashboardService from "./dashboard.service";

class dashboardController {
    /**
     * @description: dashboardPage for the admin
     * @param {*} req
     * @param {*} res
     */
    static async dashboardPage(req, res) {
        const data = await dashboardService.dashboardPage(req, res);
        return;
    }
}

export default dashboardController;
