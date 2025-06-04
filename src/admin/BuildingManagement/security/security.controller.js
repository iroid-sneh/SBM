import securityService from "./security.service";

class securityController {
    /**
     * @description: casesPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async casesPage(req, res) {
        const data = await securityService.casesPage(req, res);
        return;
    }

    /**
     * @description: visitorsPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async visitorsPage(req, res) {
        const data = await securityService.visitorsPage(req, res);
        return;
    }
}

export default securityController;
