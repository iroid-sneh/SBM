import bmServices from "./bm.service";

class bmController {
    /**
     * @description: Login For Building Managment
     * @param {*} req
     * @param {*} res
     */
    static async loginPage(req, res) {
        const data = await bmServices.loginPage(req, res);
        return;
    }

    /**
     * @description: Login For Building Managment
     * @param {*} req
     * @param {*} res
     */
    static async login(req, res) {
        const data = await bmServices.login(req.body, req, res);
        return;
    }

    /**
     * @description: bussinessDetails Page For Building Managment
     * @param {*} req
     * @param {*} res
     */
    static async bussinessDetailsPage(req, res) {
        const data = await bmServices.bussinessDetailsPage(req, res);
        return;
    }

    /**
     * @description: bussinessDetails For Building Managment
     * @param {*} req
     * @param {*} res
     */
    static async bussinessDetails(req, res) {
        const data = await bmServices.bussinessDetails(
            req.body,
            req.file,
            req,
            res
        );
        return;
    }

    /**
     * @description: adminProfilePage For Building Managment
     * @param {*} req
     * @param {*} res
     */
    static async adminProfilePage(req, res) {
        const data = await bmServices.adminProfilePage(req, res);
        return;
    }

    /**
     * @description: adminProfile For Building Managment
     * @param {*} req
     * @param {*} res
     */
    static async adminProfile(req, res) {
        const data = await bmServices.adminProfile(
            req.body,
            req.file,
            req,
            res
        );
        return;
    }

    /**
     * @description: verifyOtp For Building Managment
     * @param {*} req
     * @param {*} res
     */
    static async verifyOtp(req, res) {
        const data = await bmServices.verifyOtp(req.body, req, res);
        return;
    }

    /**
     * @description: resendOtp For Building Managment
     * @param {*} req
     * @param {*} res
     */
    static async resendOtp(req, res) {
        const data = await bmServices.resendOtp(req, res);
        return;
    }

    /**
     * @description: residenceDetails For Building Managment
     * @param {*} req
     * @param {*} res
     */
    static async residenceDetailsPage(req, res) {
        const data = await bmServices.residenceDetailsPage(req, res);
        return;
    }

    /**
     * @description: residenceDetails For Building Managment
     * @param {*} req
     * @param {*} res
     */
    static async residenceDetails(req, res) {
        const data = await bmServices.residenceDetails(req, res);
        return;
    }

    /**
     * @description: bankDetails For Building Managment
     * @param {*} req
     * @param {*} res
     */
    static async bankDetailsPage(req, res) {
        const data = await bmServices.bankDetailsPage(req, res);
        return;
    }

    /**
     * @description: bankDetails For Building Managment
     * @param {*} req
     * @param {*} res
     */
    static async bankDetails(req, res) {
        const data = await bmServices.bankDetails(req.body, req, res);
        return;
    }

    /**
     * @description: subscriptionDetails For Building Managment
     * @param {*} req
     * @param {*} res
     */
    static async subscriptionDetailsPage(req, res) {
        const data = await bmServices.subscriptionDetailsPage(req, res);
        return;
    }

    /**
     * @description: subscriptionDetails For Building Managment
     * @param {*} req
     * @param {*} res
     */
    static async subscriptionDetails(req, res) {
        const data = await bmServices.subscriptionDetails(req, res);
        return;
    }

    /**
     * @description: notificationPage For Building Managment
     * @param {*} req
     * @param {*} res
     */
    static async notificationPage(req, res) {
        const data = await bmServices.notificationPage(req, res);
        return;
    }

    /**
     * @description: reviewDetails For Building Managment
     * @param {*} req
     * @param {*} res
     */
    static async reviewDetailsPage(req, res) {
        const data = await bmServices.reviewDetailsPage(req, res);
        return;
    }

    /**
     * @description: reviewDetails For Building Managment
     * @param {*} req
     * @param {*} res
     */
    static async reviewDetails(req, res) {
        const data = await bmServices.reviewDetails(req, res);
        return;
    }
}

export default bmController;
