class productsServices {
    /**
     * @description: productsPage for Admin
     * @param {*} req
     * @param {*} res
     */
    static async productsPage(req, res) {
        // const user = req.user;

        // const { preference, category } = user;

        // const userType = `${preference}-${category}`;

        const userType = "Service-Service Provider";

        switch (userType) {
            case "Service-Freelancer":
                res.render(
                    "adminPanels/serviceProvider&Maintenance/products/Service-Freelancer/serviceFreelancer",
                    {
                        currentPage: "products",
                        layout: "adminPanels/serviceProvider&Maintenance/layouts/layout",
                        // user,
                    }
                );
                break;
            case "Service-Service Provider":
                res.render(
                    "adminPanels/serviceProvider&Maintenance/products/Service-ServiceProvider/serviceProvider",
                    {
                        currentPage: "products",
                        layout: "adminPanels/serviceProvider&Maintenance/layouts/layout",
                        // user,
                    }
                );
                break;
            case "Maintenance-Contractor Based":
                res.render(
                    "adminPanels/serviceProvider&Maintenance/products/Maintenance-ContractorBased/maintenanceContractor",
                    {
                        currentPage: "products",
                        layout: "adminPanels/serviceProvider&Maintenance/layouts/layout",
                        // user,
                    }
                );
                break;
            case "Maintenance-Service Provider":
                res.render(
                    "adminPanels/serviceProvider&Maintenance/products/Maintenance-ServiceProvider/maintenanceServiceProvider",
                    {
                        currentPage: "products",
                        layout: "adminPanels/serviceProvider&Maintenance/layouts/layout",
                        // user,
                    }
                );
                break;
            default:
                res.redirect("/spadmin/dashboard");
                break;
        }
    }
}

export default productsServices;
