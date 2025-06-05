import feedbackService from "./feedback.service";

class feedbackController {
    /**
     * @description: feedbackPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async feedbackPage(req, res) {
        const data = await feedbackService.feedbackPage(req, res);
        return;
    }
}

export default feedbackController;
