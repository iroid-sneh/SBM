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
        const data = await bmServices.login(req, res);
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
     * @description: adminProfilePage For Building Managment
     * @param {*} req
     * @param {*} res
     */
    static async adminProfilePage(req, res) {
        const data = await bmServices.adminProfilePage(req, res);
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
     * @description: bankDetails For Building Managment
     * @param {*} req
     * @param {*} res
     */
    static async bankDetailsPage(req, res) {
        const data = await bmServices.bankDetailsPage(req, res);
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
     * @description: reviewDetails For Building Managment
     * @param {*} req
     * @param {*} res
     */
    static async reviewDetailsPage(req, res) {
        const data = await bmServices.reviewDetailsPage(req, res);
        return;
    }
}

export default bmController;
