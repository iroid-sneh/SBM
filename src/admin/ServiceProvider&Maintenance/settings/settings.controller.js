import settingsServices from "./settings.service";

class settingsController {
    /**
     * @description: bussinessDetailsPage for the admin
     * @param {*} req
     * @param {*} res
     */
    static async bussinessDetailsPage(req, res) {
        const data = await settingsServices.bussinessDetailsPage(req, res);
        return;
    }

    /**
     * @description: adminProfilePage for the admin
     * @param {*} req
     * @param {*} res
     */
    static async adminProfilePage(req, res) {
        const data = await settingsServices.adminProfilePage(req, res);
        return;
    }

    /**
     * @description: bankDetailsPage for the admin
     * @param {*} req
     * @param {*} res
     */
    static async bankDetailsPage(req, res) {
        const data = await settingsServices.bankDetailsPage(req, res);
        return;
    }

    /**
     * @description: subscriptionPlanPage for the admin
     * @param {*} req
     * @param {*} res
     */
    static async subscriptionPlanPage(req, res) {
        const data = await settingsServices.subscriptionPlanPage(req, res);
        return;
    }
}

export default settingsController;
