class requestsServices {
    /**
     * @description: requests Page for admin
     * @param {*} req
     * @param {*} res
     */
    static async requestsPage(req, res) {
        // Example User Selection Data
        const user = {
            prefrence: "Maintenance", //  Service , Maintenance
            category: "Service Provider", //  Service Provider, Freelancer
        };

        const { prefrence, category } = user;

        // const userType = `${prefrence}-${category}`;

        if (prefrence === "Service") {
            return res.render(
                "adminPanels/serviceProvider&Maintenance/requests/serviceRequests",
                {
                    currentPage: "requests",
                    layout: "adminPanels/serviceProvider&Maintenance/layouts/layout",
                }
            );
        } else if (prefrence === "Maintenance") {
            return res.render(
                "adminPanels/serviceProvider&Maintenance/requests/maintenanceRequests",
                {
                    currentPage: "requests",
                    layout: "adminPanels/serviceProvider&Maintenance/layouts/layout",
                }
            );
        }
    }
}

export default requestsServices;
