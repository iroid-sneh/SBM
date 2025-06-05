class feedbackService {
    /**
     * @description: feedbackPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async feedbackPage(req, res) {
        return res.render("adminPanels/buildingManagement/feedback/feedback", {
            currentPage: "feedback",
            layout: "adminPanels/buildingManagement/layouts/layout",
        });
    }
}

export default feedbackService;
