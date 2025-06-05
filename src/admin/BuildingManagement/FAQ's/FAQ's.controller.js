import FAQService from "./FAQ's.service";

class FAQController {
    /**
     * @description: generalinformationPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async generalinformationPage(req, res) {
        const data = FAQService.generalinformationPage(req, res);
        return;
    }

    /**
     * @description: guidelinesPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async guidelinesPage(req, res) {
        const data = FAQService.guidelinesPage(req, res);
        return;
    }

    /**
     * @description: termsandpoliciesPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async termsandpoliciesPage(req, res) {
        const data = FAQService.termsandpoliciesPage(req, res);
        return;
    }

    /**
     * @description: accountandprofilePage for admin
     * @param {*} req
     * @param {*} res
     */
    static async accountandprofilePage(req, res) {
        const data = FAQService.accountandprofilePage(req, res);
        return;
    }

    /**
     * @description: billingandsubscriptionPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async billingandsubscriptionPage(req, res) {
        const data = FAQService.billingandsubscriptionPage(req, res);
        return;
    }

    /**
     * @description: livesupportPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async livesupportPage(req, res) {
        const data = FAQService.livesupportPage(req, res);
        return;
    }
}

export default FAQController;
