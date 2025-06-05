class pushNotificationService {
    /**
     * @description: pushNotificationPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async pushNotificationPage(req, res) {
        return res.render(
            "adminPanels/buildingManagement/pushNotification/pushNotification",
            {
                currentPage: "notification",
                layout: "adminPanels/buildingManagement/layouts/layout",
                data: {
                    status: "Waiting",
                },
            }
        );
    }
}

export default pushNotificationService;
