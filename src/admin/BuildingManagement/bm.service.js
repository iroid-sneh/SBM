import Countries from "../../../models/countries";
import Cities from "../../../models/cities";
import BMbusinessDetails from "../../../models/BMAdmin/bussinessDetails";
class bmServices {
    /**
     * @description: Login Page for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async loginPage(req, res) {
        // Fetching countries for the dropdown
        const countries = await Countries.find({});
        return res.render("adminPanels/buildingManagement/login", {
            layout: false,
            countries: countries,
        });
    }

    /**
     * @description: Login for Building Management
     * @param {*} data
     * @param {*} req
     * @param {*} res
     */
    static async login(data, req, res) {
        const { countryCode, Number, password } = req.body;
        return res.redirect("/bmadmin/bussinessdetails");
    }

    /**
     * @description: bussinessDetailsPage for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async bussinessDetailsPage(req, res) {
        const countries = await Countries.find({});
        const cities = await Cities.find({}).populate("country");
        return res.render("adminPanels/buildingManagement/bussinessDetails", {
            layout: false,
            countries: countries,
            cities: cities,
        });
    }

    /**
     * @description: bussinessDetails for Building Management
     * @param {*} data
     * @param {*} file
     * @param {*} req
     * @param {*} res
     */
    static async bussinessDetails(data, file, req, res) {
        console.log(data);

        const businessLogo = file
            ? `/BMadmin/businessLogo-${file.filename}`
            : null;

        if (file) {
            await BMbusinessDetails.create({
                commercialName: data.commercialName,
                countryCode: countryCode.data,
                businessLandline: businessLandline.data,
                VATnumber: VATnumber.data,
                CRnumber: CRnumber.data,
                bussinessEmail: bussinessEmail.data,
                workingTime: workingTime.data,
                workingDays: workingDays.data,
                country: data.country,
                city: data.city,
                addressLat: data.addressLat,
                addressLong: data.addressLong,
                businessLogo: businessLogo,
            });

            req.flash("success", "Bussiness Details Added Successfully.");
            return res.redirect("/bmadmin/adminprofile");
        }
    }

    /**
     * @description: adminProfilePage for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async adminProfilePage(req, res) {
        return res.render("adminPanels/buildingManagement/adminProfile", {
            layout: false,
        });
    }

    /**
     * @description: residenceDetailsPage for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async residenceDetailsPage(req, res) {
        return res.render("adminPanels/buildingManagement/residenceDetails", {
            layout: false,
        });
    }

    /**
     * @description: bankDetailsPage for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async bankDetailsPage(req, res) {
        return res.render("adminPanels/buildingManagement/bankDetails", {
            layout: false,
        });
    }

    /**
     * @description: subscriptionDetailsPage for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async subscriptionDetailsPage(req, res) {
        return res.render(
            "adminPanels/buildingManagement/subscriptionDetails",
            {
                layout: false,
            }
        );
    }

    /**
     * @description: notificationPage for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async notificationPage(req, res) {
        return res.render("adminPanels/buildingManagement/notification", {
            currentPage: null,
            layout: "adminPanels/buildingManagement/layouts/layout",
        });
    }

    /**
     * @description: reviewDetailsPage for Building Management
     * @param {*} req
     * @param {*} res
     */
    static async reviewDetailsPage(req, res) {
        return res.render("adminPanels/buildingManagement/reviewDetails", {
            layout: false,
        });
    }
}

export default bmServices;
