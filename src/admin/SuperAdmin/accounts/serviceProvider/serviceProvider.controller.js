import serviceProviderServices from "./serviceProvider.service";

class serviceProviderController {
    /**
     * @description: Service provider page for the Accounts page
     * @param {*} req
     * @param {*} res
     */
    static async serviceProviderPage(req, res) {
        const data = await serviceProviderServices.serviceProviderPage(
            req,
            res
        );
        return;
    }

    /**
     * @description: Service provider page new Requests for the Accounts page
     * @param {*} req
     * @param {*} res
     */
    static async newRequestsPage(req, res) {
        const data = await serviceProviderServices.newRequestsPage(req, res);
        return;
    }

    /**
     * @description: Service provider page previous Requests for the Accounts page
     * @param {*} req
     * @param {*} res
     */
    static async previousRequestsPage(req, res) {
        const data = await serviceProviderServices.previousRequestsPage(
            req,
            res
        );
        return;
    }
}

export default serviceProviderController;
