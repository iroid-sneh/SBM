class feedbackServices {
    /**
     * @description: Feedback Page for Super admin
     * @param {*} req
     * @param {*} res
     */
    static async feedbackPage(req, res) {
        return (
            res.render("adminPanels/superAdmin/feedback/feedback"),
            {
                currentPage: "feedback",
            }
        );
    }
}

export default feedbackServices;
