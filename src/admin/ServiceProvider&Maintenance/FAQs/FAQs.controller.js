import FAQsServices from "./FAQs.service";

class FAQsController {
    /**
     * @description: generalInformationPage For Admin
     * @param {*} req
     * @param {*} res
     */
    static async generalInformationPage(req, res) {
        const data = await FAQsServices.generalInformationPage(req, res);
        return;
    }

    /**
     * @description: guidelinesPage For Admin
     * @param {*} req
     * @param {*} res
     */
    static async guidelinesPage(req, res) {
        const data = await FAQsServices.guidelinesPage(req, res);
        return;
    }

    /**
     * @description: termsAndPolicesPage For Admin
     * @param {*} req
     * @param {*} res
     */
    static async termsAndPolicesPage(req, res) {
        const data = await FAQsServices.termsAndPolicesPage(req, res);
        return;
    }

    /**
     * @description: accountAndProfilePage For Admin
     * @param {*} req
     * @param {*} res
     */
    static async accountAndProfilePage(req, res) {
        const data = await FAQsServices.accountAndProfilePage(req, res);
        return;
    }

    /**
     * @description: billingAndSubscriptionPage For Admin
     * @param {*} req
     * @param {*} res
     */
    static async billingAndSubscriptionPage(req, res) {
        const data = await FAQsServices.billingAndSubscriptionPage(req, res);
        return;
    }

    /**
     * @description: liveSupportPage For Admin
     * @param {*} req
     * @param {*} res
     */
    static async liveSupportPage(req, res) {
        const data = await FAQsServices.liveSupportPage(req, res);
        return;
    }
}

export default FAQsController;
