import Cloths from "../../../../models/cloths";
import { baseUrl } from "../../../common/constants/constant";

class productsServices {
    /**
     * @description: productsPage for Admin
     * @param {*} req
     * @param {*} res
     */
    static async productsPage(req, res) {
        // Example User Selection Data
        const user = {
            prefrence: "Service", //  Service , Maintenance
            category: "Service Provider", //  Service Provider, Freelancer
            serviceType: "Tutors", // Laundry, Cleaning, Tutors , Beauty&Spa, PetCare, Trainers.
            subType: "Cooking", // Education, Instruments, Cooking. (sub types of the Tutors).
        };

        const { prefrence, category, serviceType, subType } = user;
        const userType = `${prefrence}-${category}`;

        if (prefrence === "Service") {
            let pathView = null;

            switch (serviceType) {
                case "Laundry":
                    pathView =
                        "adminPanels/serviceProvider&Maintenance/products/Freelancer-ServiceProvider/Laundry/laundry";
                    break;

                case "Cleaning":
                    switch (subType) {
                        case "House Keeping":
                            pathView =
                                "adminPanels/serviceProvider&Maintenance/products/Freelancer-ServiceProvider/Cleaning/HouseKeeping/houseKeeping";
                            break;
                        case "Deep Cleaning":
                            pathView =
                                "adminPanels/serviceProvider&Maintenance/products/Freelancer-ServiceProvider/Cleaning/DeepCleaning/deepCleaning";
                            break;
                        case "Car Care":
                            pathView =
                                "adminPanels/serviceProvider&Maintenance/products/Freelancer-ServiceProvider/Cleaning/CarCare/carCare";
                            break;
                    }
                    break;

                case "Beauty & Spa":
                    switch (subType) {
                        case "Salon":
                            pathView =
                                "adminPanels/serviceProvider&Maintenance/products/Freelancer-ServiceProvider/Beauty&Spa/Salon/salon";
                            break;
                        case "Barber":
                            pathView =
                                "adminPanels/serviceProvider&Maintenance/products/Freelancer-ServiceProvider/Beauty&Spa/Barber/barber";
                            break;
                        case "Spa":
                            pathView =
                                "adminPanels/serviceProvider&Maintenance/products/Freelancer-ServiceProvider/Beauty&Spa/Spa/spa";
                            break;
                    }
                    break;

                case "Pet Care":
                    switch (subType) {
                        case "Pet Grooming":
                            pathView =
                                "adminPanels/serviceProvider&Maintenance/products/Freelancer-ServiceProvider/PetCare/PetGrooming/petGrooming";
                            break;
                        case "Veterinary":
                            pathView =
                                "adminPanels/serviceProvider&Maintenance/products/Freelancer-ServiceProvider/PetCare/Veterinary/veterinary";
                            break;
                        case "Pet Sitter":
                            pathView =
                                "adminPanels/serviceProvider&Maintenance/products/Freelancer-ServiceProvider/PetCare/PetSitter/petSitter";
                            break;
                    }
                    break;

                case "Tutors":
                    switch (subType) {
                        case "Education":
                            pathView =
                                "adminPanels/serviceProvider&Maintenance/products/Freelancer-ServiceProvider/Tutors/Education/education";
                            break;
                        case "Instruments":
                            pathView =
                                "adminPanels/serviceProvider&Maintenance/products/Freelancer-ServiceProvider/Tutors/Instruments/instruments";
                            break;
                        case "Cooking":
                            if (category === "Freelancer") {
                                pathView =
                                    "adminPanels/serviceProvider&Maintenance/products/Freelancer-ServiceProvider/Tutors/Cooking/freelancerCooking";
                            } else if (category === "Service Provider") {
                                pathView =
                                    "adminPanels/serviceProvider&Maintenance/products/Freelancer-ServiceProvider/Tutors/Cooking/serviceProviderCooking";
                            }
                            break;
                    }
                    break;

                case "Trainers":
                    switch (subType) {
                        case "Fitness":
                            pathView =
                                "adminPanels/serviceProvider&Maintenance/products/Freelancer-ServiceProvider/Trainers/Fitness/fitness";
                            break;
                        case "Swimming":
                            pathView =
                                "adminPanels/serviceProvider&Maintenance/products/Freelancer-ServiceProvider/Trainers/Swimming/swimming";
                            break;
                        case "Pet Training":
                            pathView =
                                "adminPanels/serviceProvider&Maintenance/products/Freelancer-ServiceProvider/Trainers/PetTraining/petTraining";
                            break;
                    }
                    break;
            }

            if (pathView) {
                return res.render(pathView, {
                    currentPage: "products",
                    layout: "adminPanels/serviceProvider&Maintenance/layouts/layout",
                    user,
                    items: {
                        SrNo: "01",
                        Category: "Sedan",
                        Under3x5ftOriginalPrice: "30.000",
                        under4x6ft: "33.000",
                        TaxAmount: "10%",
                    },
                    // items: null,
                });
            } else {
                return res.redirect("/spadmin/dashboard");
            }
        }
    }

    /**
     * @description: addServicePage for Admin
     * @param {*} req
     * @param {*} res
     */
    static async addServicePage(req, res) {
        const user = {
            preference: "Service",
            category: "Service Provider",
            serviceType: "Tutors",
            subType: "Cooking",
        };

        const { preference, category, serviceType, subType } = user;

        let viewPath = null;

        if (preference === "Service") {
            switch (serviceType) {
                case "Laundry":
                    viewPath =
                        "adminPanels/serviceProvider&Maintenance/products/Freelancer-ServiceProvider/Laundry/laundryAddService";
                    break;

                case "Cleaning":
                    if (subType === "Deep Cleaning")
                        viewPath =
                            "adminPanels/serviceProvider&Maintenance/products/Freelancer-ServiceProvider/Cleaning/DeepCleaning/DCaddService";
                    else if (subType === "Car Care")
                        viewPath =
                            "adminPanels/serviceProvider&Maintenance/products/Freelancer-ServiceProvider/Cleaning/CarCare/CCaddService";
                    break;

                case "Tutors":
                    if (subType === "Cooking")
                        viewPath =
                            "adminPanels/serviceProvider&Maintenance/products/Freelancer-ServiceProvider/Tutors/Cooking/SPCookingaddService";
                    break;

                case "Beauty & Spa":
                    if (subType === "Salon")
                        viewPath =
                            "adminPanels/serviceProvider&Maintenance/products/Freelancer-ServiceProvider/Beauty&Spa/Salon/salonAddService";
                    else if (subType === "Barber")
                        viewPath =
                            "adminPanels/serviceProvider&Maintenance/products/Freelancer-ServiceProvider/Beauty&Spa/Barber/barberAddService";
                    else if (subType === "Spa")
                        viewPath =
                            "adminPanels/serviceProvider&Maintenance/products/Freelancer-ServiceProvider/Beauty&Spa/Spa/spaAddService";
                    break;

                case "Pet Care":
                    if (subType === "Pet Grooming")
                        viewPath =
                            "adminPanels/serviceProvider&Maintenance/products/Freelancer-ServiceProvider/PetCare/PetGrooming/PGaddService";
                    break;
            }
        }

        if (viewPath) {
            return res.render(viewPath, {
                currentPage: "products",
                layout: "adminPanels/serviceProvider&Maintenance/layouts/layout",
                user,
            });
        } else {
            return res.render(
                "adminPanels/serviceProvider&Maintenance/products/Freelancer-ServiceProvider/default",
                {
                    layout: "adminPanels/serviceProvider&Maintenance/layouts/layout",
                    currentPage: "products",
                    user,
                }
            );
        }
    }

    /**
     * @description: getClothsList For Admin service
     * @param {*} req
     * @param {*} res
     */
    static async getClothsList(req, res) {
        try {
            const categories = req.query.categories?.split(",") || [];
            const filter =
                categories.length > 0 ? { category: { $in: categories } } : {};

            const cloths = await Cloths.find(filter);

            const result = cloths.map((c) => ({
                ...c._doc,
                image: baseUrl(c.image),
            }));

            res.json(result);
        } catch (error) {
            res.status(500).json({ error: "Cloths list fetching failed" });
        }
    }
}

export default productsServices;
