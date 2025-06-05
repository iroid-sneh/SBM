class FAQService {
    /**
     * @description: generalinformationPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async generalinformationPage(req, res) {
        return res.render(
            "adminPanels/buildingManagement/FAQs/generalInformation",
            {
                currentPage: "FAQs",
                layout: "adminPanels/buildingManagement/layouts/layout",
            }
        );
    }

    /**
     * @description: guidelinesPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async guidelinesPage(req, res) {
        return res.render("adminPanels/buildingManagement/FAQs/guidelines", {
            currentPage: "FAQs",
            layout: "adminPanels/buildingManagement/layouts/layout",
        });
    }

    /**
     * @description: termsandpoliciesPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async termsandpoliciesPage(req, res) {
        return res.render(
            "adminPanels/buildingManagement/FAQs/termsAndPolicies",
            {
                currentPage: "FAQs",
                layout: "adminPanels/buildingManagement/layouts/layout",
            }
        );
    }

    /**
     * @description: accountandprofilePage for admin
     * @param {*} req
     * @param {*} res
     */
    static async accountandprofilePage(req, res) {
        return res.render(
            "adminPanels/buildingManagement/FAQs/accountAndProfile",
            {
                currentPage: "FAQs",
                layout: "adminPanels/buildingManagement/layouts/layout",
            }
        );
    }

    /**
     * @description: billingandsubscriptionPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async billingandsubscriptionPage(req, res) {
        return res.render(
            "adminPanels/buildingManagement/FAQs/billingAndSubscription",
            {
                currentPage: "FAQs",
                layout: "adminPanels/buildingManagement/layouts/layout",
            }
        );
    }

    /**
     * @description: livesupportPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async livesupportPage(req, res) {
        return res.render(
            "adminPanels/buildingManagement/FAQs/liveSupport",
            {
                currentPage: "FAQs",
                layout: "adminPanels/buildingManagement/layouts/layout",
            }
        );
    }
}

export default FAQService;
