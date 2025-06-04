class securityService {
    /**
     * @description: casesPage for the admin
     * @param {*} req
     * @param {*} res
     */
    static async casesPage(req, res) {
        return res.render("adminPanels/buildingManagement/security/cases", {
            currentPage: "security",
            layout: "adminPanels/buildingManagement/layouts/layout",
            caseData: {
                resident: {
                    name: "Wasim S. Shamoon",
                    flat: "363 - Flat",
                    image: "/uploads/garden.jpg",
                },
                status: "Investigation", // Solved | "New Case" | "Investigation"
                date: "25-01-2024",
                time: "10:00 AM",
                caseType: "Lost",
                location: "Garden Area",
                locationUrl: "#",
                assignedSecurity: "Jean Emmanuel Baubau",
                description: "While I was spending time in the garden...",
                result: "I noticed something unusual near one of the flower beds...",
            },
            securities: [
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
        });
    }

    /**
     * @description: visitorsPage for the admin
     * @param {*} req
     * @param {*} res
     */
    static async visitorsPage(req, res) {
        return res.render("adminPanels/buildingManagement/security/visitors", {
            currentPage: "security",
            layout: "adminPanels/buildingManagement/layouts/layout",
            properties: [
                { id: 1, name: "AlNaseem" },
                { id: 2, name: "Seef Villas" },
                { id: 3, name: "Marassi Bay" },
            ],
            selectedPropertyId: 1,
        });
    }
}

export default securityService;
