class rewardsServices {
    /**
     * @description: Rewards Page for Super admin
     * @param {*} req
     * @param {*} res
     */
    static async rewardsPage(req, res) {
        return (
            res.render("adminPanels/superAdmin/rewards/nomination/nomination"),
            {
                currentPage: "rewards",
            }
        );
    }

    /**
     * @description: Rewards Page for Super admin
     * @param {*} req
     * @param {*} res
     */
    static async couponsPage(req, res) {
        return (
            res.render("adminPanels/superAdmin/rewards/coupons/coupons"),
            {
                currentPage: "rewards",
            }
        );
    }

    /**
     * @description: Rewards Page for Super admin
     * @param {*} req
     * @param {*} res
     */
    static async promoCodePage(req, res) {
        return (
            res.render("adminPanels/superAdmin/rewards/promoCode/promoCode"),
            {
                currentPage: "rewards",
            }
        );
    }
}

export default rewardsServices;
