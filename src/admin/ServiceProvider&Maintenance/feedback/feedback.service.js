class feedbackServices {
    /**
     * @description: feedbackPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async feedbackPage(req, res) {
        return res.render(
            "adminPanels/serviceProvider&Maintenance/feedback/feedback",
            {
                currentPage: "feedback",
                layout: "adminPanels/serviceProvider&Maintenance/layouts/layout",
            }
        );
    }
}

export default feedbackServices;
