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

    /**
     * @description: New Requests Page of Building Management Page
     * @param {*} req
     * @param {*} res
     */
    static async newRequestsPage(req, res) {
        const data = await buildingManagementServices.newRequestsPage(req, res);
        return;
    }

    /**
     * @description: New Requests Page of Building Management Page
     * @param {*} req
     * @param {*} res
     */
    static async previousRequestsPage(req, res) {
        const data = await buildingManagementServices.previousRequestsPage(
            req,
            res
        );
        return;
    }
}

export default buildingManagementController;
