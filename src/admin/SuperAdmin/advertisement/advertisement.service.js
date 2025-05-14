class advertisementServices {
    /**
     * @description: Get advertisement page for super admin
     * @param {*} req
     * @param {*} res
     */
    static async advertisementPage(req, res) {
        return res.render(
            "adminPanels/superAdmin/advertisement/advertisement",
            {
                currentPage: "advertisement",
            }
        );
    }
}

export default advertisementServices;
