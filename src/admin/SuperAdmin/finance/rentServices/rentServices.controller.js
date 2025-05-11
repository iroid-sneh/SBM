import rentServices from "./rentServices.service";

class rentServicesController {
    /**
     * @description: Rent Services Page
     * @param {*} req
     * @param {*} res
     */
    static async rentServicesPage(req, res) {
        const data = await rentServices.rentServicesPage(req, res);
        return;
    }

    /**
     * @description: Release Page of Rent Services
     * @param {*} req
     * @param {*} res
     */
    static async releasePage(req, res) {
        const data = await rentServices.releasePage(req, res);
        return;
    }
}

export default rentServicesController;
