import feedbackServices from "./feedback.service";

class feedbackController {
    /**
     * @description: FeedBack Page for the Super admin
     * @param {*} req
     * @param {*} res
     */
    static async feedbackPage(req, res) {
        const data = await feedbackServices.feedbackPage(req, res);
        return;
    }
}

export default feedbackController;
