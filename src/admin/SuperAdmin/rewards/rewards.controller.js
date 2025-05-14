import rewardsServices from "./rewards.service";

class rewardsController {
    /**
     * @description: Rewards Page for the Super admin
     * @param {*} req
     * @param {*} res
     */
    static async rewardsPage(req, res) {
        const data = await rewardsServices.rewardsPage(req, res);
        return;
    }

    /**
     * @description: Rewards Page for the Super admin
     * @param {*} req
     * @param {*} res
     */
    static async couponsPage(req, res) {
        const data = await rewardsServices.couponsPage(req, res);
        return;
    }

    /**
     * @description: Rewards Page for the Super admin
     * @param {*} req
     * @param {*} res
     */
    static async promoCodePage(req, res) {
        const data = await rewardsServices.promoCodePage(req, res);
        return;
    }
}

export default rewardsController;
