class rentServices {
    /**
     * @description: Rent Services Page
     * @param {*} req
     * @param {*} res
     */
    static async rentServicesPage(req, res) {
        return res.render(
            "adminPanels/superAdmin/finance/rentServices/rentServices",
            {
                currentPage: "finance",
            }
        );
    }

    /**
     * @description:
     * @param {*} req
     * @param {*} res
     */
    static async releasePage(req, res) {
        return res.render(
            "adminPanels/superAdmin/finance/rentServices/release",
            {
                currentPage: "finance",
            }
        );
    }
}

export default rentServices;
