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

    /**
     * @description: Fianance Page for Super Admin
     * @param {*} req
     * @param {*} res
     */
    static async financePage(req, res) {
        const data = await superAdminService.financePage(req, res);
        return;
    }

    /**
     * @description: Page for Super Admin
     * @param {*} req
     * @param {*} res
     */
    static async accountsPage(req, res) {
        const data = await superAdminService.accountsPage(req, res);
        return;
    }

    /**
     * @description: Page for Super Admin
     * @param {*} req
     * @param {*} res
     */
    static async invoicesPage(req, res) {
        const data = await superAdminService.invoicesPage(req, res);
        return;
    }

    /**
     * @description: Page for Super Admin
     * @param {*} req
     * @param {*} res
     */
    static async servicesPage(req, res) {
        const data = await superAdminService.servicesPage(req, res);
        return;
    }

    /**
     * @description: Page for Super Admin
     * @param {*} req
     * @param {*} res
     */
    static async maintenancePage(req, res) {
        const data = await superAdminService.maintenancePage(req, res);
        return;
    }

    /**
     * @description: Page for Super Admin
     * @param {*} req
     * @param {*} res
     */
    static async eventsPage(req, res) {
        const data = await superAdminService.eventsPage(req, res);
        return;
    }

    /**
     * @description: Page for Super Admin
     * @param {*} req
     * @param {*} res
     */
    static async advertisementsPage(req, res) {
        const data = await superAdminService.advertisementsPage(req, res);
        return;
    }

    /**
     * @description: Page for Super Admin
     * @param {*} req
     * @param {*} res
     */
    static async pushNotificationPage(req, res) {
        const data = await superAdminService.pushNotificationPage(req, res);
        return;
    }

    /**
     * @description: Page for Super Admin
     * @param {*} req
     * @param {*} res
     */
    static async feedbackPage(req, res) {
        const data = await superAdminService.feedbackPage(req, res);
        return;
    }

    /**
     * @description: Page for Super Admin
     * @param {*} req
     * @param {*} res
     */
    static async rewardsPage(req, res) {
        const data = await superAdminService.rewardsPage(req, res);
        return;
    }

    /**
     * @description: Page for Super Admin
     * @param {*} req
     * @param {*} res
     */
    static async settingsPage(req, res) {
        const data = await superAdminService.settingsPage(req, res);
        return;
    }
}

export default superAdminController;
