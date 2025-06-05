class theOfficeService {
    /**
     * @description: documentsPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async documentsPage(req, res) {
        return res.render(
            "adminPanels/buildingManagement/theoffice/documents/documents",
            {
                currentPage: "theoffice",
                layout: "adminPanels/buildingManagement/layouts/layout",
            }
        );
    }

    /**
     * @description: officeDocumentsPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async officeDocumentsPage(req, res) {
        return res.render(
            "adminPanels/buildingManagement/theoffice/documents/officedocuments",
            {
                currentPage: "theoffice",
                layout: "adminPanels/buildingManagement/layouts/layout",
            }
        );
    }

    /**
     * @description: electionPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async electionPage(req, res) {
        return res.render("adminPanels/buildingManagement/theoffice/election", {
            currentPage: "theoffice",
            layout: "adminPanels/buildingManagement/layouts/layout",
            properties: [
                { id: 1, name: "AlNaseem" },
                { id: 2, name: "Seef Villas" },
                { id: 3, name: "Marassi Bay" },
            ],
            selectedPropertyId: 1,
        });
    }

    /**
     * @description: nominationPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async nominationPage(req, res) {
        return res.render(
            "adminPanels/buildingManagement/theoffice/nomination",
            {
                currentPage: "theoffice",
                layout: "adminPanels/buildingManagement/layouts/layout",
                properties: [
                    { id: 1, name: "AlNaseem" },
                    { id: 2, name: "Seef Villas" },
                    { id: 3, name: "Marassi Bay" },
                ],
                selectedPropertyId: 1,
            }
        );
    }

    /**
     * @description: OwnersAssociationPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async OwnersAssociationPage(req, res) {
        return res.render(
            "adminPanels/buildingManagement/theoffice/ownersassociation",
            {
                currentPage: "theoffice",
                layout: "adminPanels/buildingManagement/layouts/layout",
            }
        );
    }
}

export default theOfficeService;
