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
}

export default buildingManagementServices;
