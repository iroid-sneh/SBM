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

    /**
     * @description: Service Provider Admin Panel Signup Page Step 1
     * @param {*} req
     * @param {*} res
     */
    static async adminprofilePage(req, res) {
        const data = await serviceProviderServices.adminprofilePage(req, res);
        return;
    }

    /**
     * @description: Service Provider Admin Panel Signup Page Step 2
     * @param {*} req
     * @param {*} res
     */
    static async bussinessdetailsPage(req, res) {
        const data = await serviceProviderServices.bussinessdetailsPage(
            req,
            res
        );
        return;
    }

    /**
     * @description: Service Provider Admin Panel Signup Page Step 3
     * @param {*} req
     * @param {*} res
     */
    static async bankdetailsPage(req, res) {
        const data = await serviceProviderServices.bankdetailsPage(req, res);
        return;
    }

    /**
     * @description: Service Provider Admin Panel Signup Page Step 4
     * @param {*} req
     * @param {*} res
     */
    static async choosePlanPage(req, res) {
        const data = await serviceProviderServices.choosePlanPage(req, res);
        return;
    }

    /**
     * @description: Service Provider Admin Panel Signup Page Step 5
     * @param {*} req
     * @param {*} res
     */
    static async reviewDetailsPage(req, res) {
        const data = await serviceProviderServices.reviewDetailsPage(req, res);
        return;
    }

    /**
     * @description: Service Provider Admin Panel Signup Page Step 5
     * @param {*} req
     * @param {*} res
     */
    static async notificationsPage(req, res) {
        const data = await serviceProviderServices.notificationsPage(req, res);
        return;
    }
}

export default serviceProviderController;
