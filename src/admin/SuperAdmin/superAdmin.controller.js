import superAdminService from "./superAdmin.service.js";

class superAdminController {
    /**
     * @description: Super admin login page
     * @param {*} req
     * @param {*} res
     */
    static async loginPage(req, res) {
        const data = await superAdminService.loginPage(req, res);
        return;
    }

    /**
     * @description: Super Admin Login
     * @param {*} req
     * @param {*} res
     */
    static async login(req, res) {
        const data = await superAdminService.login(req.body, req, res);
        return;
    }

    /**
     * @description: Super admin dashboard page
     * @param {*} req
     * @param {*} res
     */
    static async dashboardPage(req, res) {
        const data = await superAdminService.dashboardPage(req, res);
        return;
    }
}

export default superAdminController;
