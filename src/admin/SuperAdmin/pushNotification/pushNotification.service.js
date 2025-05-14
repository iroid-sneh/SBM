class pushNotificationServices {
    /**
     * @description: Push Notication Page for Super Admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async pushNotificationPage(req, res) {
        return (
            res.render(
                "adminPanels/superAdmin/pushNotification/pushNotification"
            ),
            {
                currentPage: "push-notification",
            }
        );
    }
}

export default pushNotificationServices;
