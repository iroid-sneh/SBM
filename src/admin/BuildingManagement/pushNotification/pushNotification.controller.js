import pushNotificationService from "./pushNotification.service";

class pushNotificationController {
    /**
     * @description: pushNotificationPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async pushNotificationPage(req, res) {
        const data = await pushNotificationService.pushNotificationPage(
            req,
            res
        );
        return;
    }
}

export default pushNotificationController;
