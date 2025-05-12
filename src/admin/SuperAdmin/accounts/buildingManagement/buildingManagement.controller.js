import buildingManagementServices from "./buildingManagement.service";

class buildingManagementController {
    /**
     * @description: Building Management Page
     * @param {*} req
     * @param {*} res
     */
    static async getBuildingManagementPage(req, res) {
        const data = await buildingManagementServices.getBuildingManagementPage(
            req,
            res
        );
        return;
    }
}

export default buildingManagementController;
