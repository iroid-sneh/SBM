import advertisementServices from "./advertisement.service";

class advertisementController {
    /**
     * @description: Get advertisement page for super admin
     * @param {*} req
     * @param {*} res
     */
    static async advertisementPage(req, res) {
        const data = await advertisementServices.advertisementPage(req, res);
        return;
    }
}

export default advertisementController;
