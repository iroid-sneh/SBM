import serviceProviderServices from "./serviceProvider.service";

class serviceProviderController {
    /**
     * @description: Service Provider Admin Panel Login Page
     * @param {*} req
     * @param {*} res
     */
    static async loginPage(req, res) {
        const data = await serviceProviderServices.loginPage(req, res);
        return;
    }
}

export default serviceProviderController;
