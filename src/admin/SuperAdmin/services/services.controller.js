import servicesOfServices from "./services.service";

class servicesController {
    /**
     * @description: services page for Super admin
     * @param {*} req
     * @param {*} res
     */
    static async servicesPage(req, res) {
        const data = await servicesOfServices.servicesPage(req, res);
        return;
    }
}

export default servicesController;
