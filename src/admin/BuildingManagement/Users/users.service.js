class usersServices {
    /**
     * @description: residentOwnerPage for admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async residentOwnerPage(req, res) {
        return res.render(
            "adminPanels/buildingManagement/users/residentOwner",
            {
                currentPage: "users",
                layout: "adminPanels/buildingManagement/layouts/layout",
            }
        );
    }

    /**
     * @description: securityPage for admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async securityPage(req, res) {
        return res.render("adminPanels/buildingManagement/users/security", {
            currentPage: "users",
            layout: "adminPanels/buildingManagement/layouts/layout",
        });
    }
}

export default usersServices;
