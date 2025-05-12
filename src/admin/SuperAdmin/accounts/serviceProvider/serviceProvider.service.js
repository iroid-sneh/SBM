class serviceProviderServices {
    /**
     * @description: Service provider page for the Accounts page
     * @param {*} req
     * @param {*} res
     */
    static async serviceProviderPage(req, res) {
        return (
            res.render(
                "adminPanels/superAdmin/accounts/serviceProvider/serviceProvider"
            ),
            {
                currentPage: "accounts",
            }
        );
    }

    /**
     * @description: Service provider page for new Requests for the Accounts page
     * @param {*} req
     * @param {*} res
     */
    static async newRequestsPage(req, res) {
        return (
            res.render(
                "adminPanels/superAdmin/accounts/serviceProvider/newRequests"
            ),
            {
                currentPage: "accounts",
            }
        );
    }

    /**
     * @description: Service provider page for Preious Requests for the Accounts page
     * @param {*} req
     * @param {*} res
     */
    static async previousRequestsPage(req, res) {
        return (
            res.render(
                "adminPanels/superAdmin/accounts/serviceProvider/previousRequests"
            ),
            {
                currentPage: "accounts",
            }
        );
    }
}

export default serviceProviderServices;
