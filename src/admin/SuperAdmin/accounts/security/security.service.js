class securityServices {
    /**
     * @description: Security Page of Accounts Page
     * @param {*} req
     * @param {*} res
     */
    static async securityPage(req, res) {
        return (
            res.render("adminPanels/superAdmin/accounts/security/security"),
            {
                currentPage: "accounts",
            }
        );
    }
}

export default securityServices;
