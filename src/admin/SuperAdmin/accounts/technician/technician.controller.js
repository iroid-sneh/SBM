import technicianServices from "./technician.service";

class technicianController {
    /**
     * @description: technician page for Accounts Page
     * @param {*} req
     * @param {*} res
     */
    static async technicianPage(req, res) {
        const data = await technicianServices.technicianPage(req, res);
        return;
    }
}

export default technicianController;
