import requestsServices from "./requests.service";

class requestsController {
    /**
     * @description: requests Page for Admin
     * @param {*} req
     * @param {*} res
     */
    static async requestsPage(req, res) {
        const data = await requestsServices.requestsPage(req, res);
        return;
    }
}

export default requestsController;
