import settingsServices from "./settings.service";

class settingsController {
    /**
     * @description: Settings (Personal Details) Page for Super admin
     * @param {*} req
     * @param {*} res
     */
    static async personalDetailsPage(req, res) {
        const data = await settingsServices.personalDetailsPage(req, res);
        return;
    }

    /**
     * @description: Settings (Bank Details) Page for Super admin
     * @param {*} req
     * @param {*} res
     */
    static async bankDetailsPage(req, res) {
        const data = await settingsServices.bankDetailsPage(req, res);
        return;
    }

    /**
     * @description: Settings (Sub Admin Details) Page for Super admin
     * @param {*} req
     * @param {*} res
     */
    static async subAdminPage(req, res) {
        const data = await settingsServices.subAdminPage(req, res);
        return;
    }

    /**
     * @description: Settings (commission Details) Page for Super admin
     * @param {*} req
     * @param {*} res
     */
    static async commissionDetailsPage(req, res) {
        const data = await settingsServices.commissionDetailsPage(req, res);
        return;
    }

    /**
     * @description: Settings (emergency Numbers Details) Page for Super admin
     * @param {*} req
     * @param {*} res
     */
    static async emergencyNumbersPage(req, res) {
        const data = await settingsServices.emergencyNumbersPage(req, res);
        return;
    }

    /**
     * @description: Settings (live Support Details) Page for Super admin
     * @param {*} req
     * @param {*} res
     */
    static async liveSupportPage(req, res) {
        const data = await settingsServices.liveSupportPage(req, res);
        return;
    }
}

export default settingsController;
