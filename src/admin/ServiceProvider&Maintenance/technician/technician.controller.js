import technicianServices from "./technician.service";

class technicianController {
    /**
     * @description: technicianPage for the admin panel
     * @param {*} req
     * @param {*} res
     */
    static async technicianPage(req, res) {
        const data = await technicianServices.technicianPage(req, res);
        return;
    }
}

export default technicianController;
