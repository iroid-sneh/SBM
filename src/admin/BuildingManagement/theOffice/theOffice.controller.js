import theOfficeService from "./theOffice.service";

class theOfficeController {
    /**
     * @description: documentsPage for the office admin
     * @param {*} req
     * @param {*} res
     */
    static async documentsPage(req, res) {
        const data = await theOfficeService.documentsPage(req, res);
        return;
    }

    /**
     * @description: officeDocumentsPage for the office admin
     * @param {*} req
     * @param {*} res
     */
    static async officeDocumentsPage(req, res) {
        const data = await theOfficeService.officeDocumentsPage(req, res);
        return;
    }

    /**
     * @description: electionPage for the office admin
     * @param {*} req
     * @param {*} res
     */
    static async electionPage(req, res) {
        const data = await theOfficeService.electionPage(req, res);
        return;
    }

    /**
     * @description: nominationPage for the office admin
     * @param {*} req
     * @param {*} res
     */
    static async nominationPage(req, res) {
        const data = await theOfficeService.nominationPage(req, res);
        return;
    }

    /**
     * @description: OwnersAssociationPage for the office admin
     * @param {*} req
     * @param {*} res
     */
    static async OwnersAssociationPage(req, res) {
        const data = await theOfficeService.OwnersAssociationPage(req, res);
        return;
    }
}

export default theOfficeController;
