import securityServices from "./security.service";

class securityController {
    /**
     * @description: Security Page for Account Page
     * @param {*} req
     * @param {*} res
     */
    static async securityPage(req, res) {
        const data = await securityServices.securityPage(req, res);
        return;
    }
}

export default securityController;
