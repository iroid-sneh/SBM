import settingsService from "./settings.service";

class settingsController {
    /**
     * @description: bussinessdetailsPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async bussinessdetailsPage(req, res) {
        const data = await settingsService.bussinessdetailsPage(req, res);
        return;
    }

    /**
     * @description: adminprofilePage for admin
     * @param {*} req
     * @param {*} res
     */
    static async adminprofilePage(req, res) {
        const data = await settingsService.adminprofilePage(req, res);
        return;
    }

    /**
     * @description: subadminPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async subadminPage(req, res) {
        const data = await settingsService.subadminPage(req, res);
        return;
    }

    /**
     * @description: residencedetailsPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async residencedetailsPage(req, res) {
        const data = await settingsService.residencedetailsPage(req, res);
        return;
    }

    /**
     * @description: amenitiesPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async amenitiesPage(req, res) {
        const data = await settingsService.amenitiesPage(req, res);
        return;
    }

    /**
     * @description: amenitiesSportsPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async amenitiesSportsPage(req, res) {
        const data = await settingsService.amenitiesSportsPage(req, res);
        return;
    }

    /**
     * @description: amenitiesHallsPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async amenitiesHallsPage(req, res) {
        const data = await settingsService.amenitiesHallsPage(req, res);
        return;
    }

    /**
     * @description: bankdetailsPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async bankdetailsPage(req, res) {
        const data = await settingsService.bankdetailsPage(req, res);
        return;
    }

    /**
     * @description: subscriptionplanPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async subscriptionplanPage(req, res) {
        const data = await settingsService.subscriptionplanPage(req, res);
        return;
    }
}

export default settingsController;
