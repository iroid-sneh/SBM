import maintenanceServices from "./maintenance.service";

class maintenanceController {
    /**
     * @description: maintenance page for super admin
     * @param {*} req
     * @param {*} res
     */
    static async maintenancePage(req, res) {
        const data = await maintenanceServices.maintenancePage(req, res);
        return;
    }
}

export default maintenanceController;
