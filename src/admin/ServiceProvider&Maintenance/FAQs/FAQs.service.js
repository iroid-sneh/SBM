class FAQsServices {
    /**
     * @description: generalInformationPage For Admin
     * @param {*} req
     * @param {*} res
     */
    static async generalInformationPage(req, res) {
        return res.render(
            "adminPanels/serviceProvider&Maintenance/FAQs/generalInformation",
            {
                currentPage: "FAQs",
                layout: "adminPanels/serviceProvider&Maintenance/layouts/layout",
            }
        );
    }

    /**
     * @description: guidelinesPage For Admin
     * @param {*} req
     * @param {*} res
     */
    static async guidelinesPage(req, res) {
        return res.render(
            "adminPanels/serviceProvider&Maintenance/FAQs/guidelines",
            {
                currentPage: "FAQs",
                layout: "adminPanels/serviceProvider&Maintenance/layouts/layout",
            }
        );
    }

    /**
     * @description: termsAndPolicesPage For Admin
     * @param {*} req
     * @param {*} res
     */
    static async termsAndPolicesPage(req, res) {
        return res.render(
            "adminPanels/serviceProvider&Maintenance/FAQs/termsAndPolices",
            {
                currentPage: "FAQs",
                layout: "adminPanels/serviceProvider&Maintenance/layouts/layout",
            }
        );
    }

    /**
     * @description: accountAndProfilePage For Admin
     * @param {*} req
     * @param {*} res
     */
    static async accountAndProfilePage(req, res) {
        return res.render(
            "adminPanels/serviceProvider&Maintenance/FAQs/accountAndProfile",
            {
                currentPage: "FAQs",
                layout: "adminPanels/serviceProvider&Maintenance/layouts/layout",
            }
        );
    }

    /**
     * @description: billingAndSubscriptionPage For Admin
     * @param {*} req
     * @param {*} res
     */
    static async billingAndSubscriptionPage(req, res) {
        return res.render(
            "adminPanels/serviceProvider&Maintenance/FAQs/billingAndSubscription",
            {
                currentPage: "FAQs",
                layout: "adminPanels/serviceProvider&Maintenance/layouts/layout",
            }
        );
    }

    /**
     * @description: liveSupportPage For Admin
     * @param {*} req
     * @param {*} res
     */
    static async liveSupportPage(req, res) {
        return res.render(
            "adminPanels/serviceProvider&Maintenance/FAQs/liveSupport",
            {
                currentPage: "FAQs",
                layout: "adminPanels/serviceProvider&Maintenance/layouts/layout",
            }
        );
    }
}

export default FAQsServices;
