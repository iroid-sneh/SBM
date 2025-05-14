import pushNotificationServices from "./pushNotification.service";

class pushNotificationController {
    /**
     * @description: Push Notificatiion Page for Super Admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async pushNotificationPage(req, res) {
        const data = await pushNotificationServices.pushNotificationPage(
            req,
            res
        );
        return;
    }
}

export default pushNotificationController;
