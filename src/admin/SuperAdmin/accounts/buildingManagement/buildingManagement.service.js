class buildingManagementServices {
    /**
     * @description: Building Management Page
     * @param {*} req
     * @param {*} res
     */
    static async getBuildingManagementPage(req, res) {
        return (
            res.render(
                "adminPanels/superAdmin/accounts/buildingManagement/buildingManagement"
            ),
            {
                currentPage: "accounts",
            }
        );
    }

    /**
     * @description: New Requests Page of Building Management Page
     * @param {*} req
     * @param {*} res
     */
    static async newRequestsPage(req, res) {
        return (
            res.render(
                "adminPanels/superAdmin/accounts/buildingManagement/newRequests"
            ),
            {
                currentPage: "accounts",
            }
        );
    }

    /**
     * @description: New Requests Page of Building Management Page
     * @param {*} req
     * @param {*} res
     */
    static async previousRequestsPage(req, res) {
        return (
            res.render(
                "adminPanels/superAdmin/accounts/buildingManagement/previousRequests"
            ),
            {
                currentPage: "accounts",
            }
        );
    }
}

export default buildingManagementServices;
