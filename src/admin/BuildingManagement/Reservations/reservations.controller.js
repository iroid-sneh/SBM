import reservationsService from "./reservations.service";

class reservationsController {
    /**
     * @description: reservationsPage for admin panel
     * @param {*} req
     * @param {*} res
     */
    static async reservationsPage(req, res) {
        const data = await reservationsService.reservationsPage(req, res);
        return;
    }

    /**
     * @description: inMaintenancePage for admin panel
     * @param {*} req
     * @param {*} res
     */
    static async inMaintenancePage(req, res) {
        const data = await reservationsService.inMaintenancePage(req, res);
        return;
    }
}

export default reservationsController;
