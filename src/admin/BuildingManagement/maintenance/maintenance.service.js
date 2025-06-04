class maintenanceService {
    /**
     * @description: inReviewPage for th maintenance service
     * @param {*} req
     * @param {*} res
     */
    static async inReviewPage(req, res) {
        const data = {
            name: "Faisal M. Toma",
            location: "125 - Flat Marassi Residence",
            status: "View SOW", // New Request | "Rejected" | "View SOW" | "Sent to Tech."
            maintenanceType: "Electrical",
            priority: "Normal",
            reasonForRejection:
                "The maintenance work is not feasible; the customer needs to replace all the lights in the hall.",
            services:
                "Lighting, Socket & Rewiring, Appliance Repair, Exhaust Fan",
            visitDate: "25-01-2024",
            visitTime: "10:00 AM",
            description:
                "The electricity went out and one of the fuses burned out, now all the kitchen appliances do not work, please replace the fuse.",
            media: [
                {
                    type: "image",
                    url: "swimmingpoolphoto.png",
                },
                {
                    type: "video",
                    url: "AdvancedTeam.mp4",
                },
            ],
        };

        return res.render(
            "adminPanels/buildingManagement/maintenance/inreview",
            {
                currentPage: "maintenance",
                layout: "adminPanels/buildingManagement/layouts/layout",
                data,
                technicians: [
                    {
                        id: 1,
                        name: "Jean Emmanuel Bauba",
                        image: "securityimage.png",
                    },
                    {
                        id: 2,
                        name: "Paul Joseph Andre",
                        image: "securityimage.png",
                    },
                    {
                        id: 3,
                        name: "Rahul Deepak Amit",
                        image: "securityimage.png",
                    },
                    {
                        id: 4,
                        name: "Sulaiman Qader Khan",
                        image: "securityimage.png",
                    },
                ],
                contractors: [
                    {
                        id: 1,
                        name: "Ottawa Electric",
                        image: "contractorsimage.png",
                    },
                    {
                        id: 2,
                        name: "Ottawa Electric",
                        image: "contractorsimage.png",
                    },
                ],
            }
        );
    }

    /**
     * @description: inProcessPage for th maintenance service
     * @param {*} req
     * @param {*} res
     */
    static async inProcessPage(req, res) {
        const data = {
            name: "Faisal M. Toma",
            location: "125 - Flat Marassi Residence",
            status: "Quotation", // "Pending" | "Rejected" | "Quotation"
            maintenanceType: "Electrical",
            priority: "Normal",
            reasonForRejection:
                "The maintenance work is not feasible; the customer needs to replace all the lights in the hall.",
            services:
                "Lighting, Socket & Rewiring, Appliance Repair, Exhaust Fan",
            visitDate: "25-01-2024",
            visitTime: "10:00 AM",
            description:
                "The electricity went out and one of the fuses burned out, now all the kitchen appliances do not work, please replace the fuse.",
            media: [
                {
                    type: "image",
                    url: "swimmingpoolphoto.png",
                },
                {
                    type: "video",
                    url: "AdvancedTeam.mp4",
                },
            ],
        };

        return res.render(
            "adminPanels/buildingManagement/maintenance/inprocess",
            {
                currentPage: "maintenance",
                layout: "adminPanels/buildingManagement/layouts/layout",
                data,
            }
        );
    }
}

export default maintenanceService;
