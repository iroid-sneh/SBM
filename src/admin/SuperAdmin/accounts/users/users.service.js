class userServices {
    /**
     * @description: Users Page from Accounts page
     * @param {*} req
     * @param {*} res
     */
    static async usersPage(req, res) {
        return (
            res.render("adminPanels/superAdmin/accounts/users/users"),
            {
                currentPage: "accounts",
            }
        );
    }
}

export default userServices;
