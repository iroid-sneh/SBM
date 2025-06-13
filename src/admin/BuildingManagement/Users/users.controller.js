import usersServices from "./users.service";
class usersController {
    /**
     * @description: residentOwnerPage For the Admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async residentOwnerPage(req, res) {
        const data = await usersServices.residentOwnerPage(req, res);
        return;
    }

    /**
     * @description: addResidentOwners For the Admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async addResidentOwners(req, res) {
        const data = await usersServices.addResidentOwners(req.body, req, res);
        return;
    }

    /**
     * @description: residentOwnersList For the Admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async residentOwnersList(req, res) {
        const data = await usersServices.residentOwnersList(
            req.query,
            req,
            res
        );
        return;
    }

    /**
     * @description: updateResidentOwner For the Admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async updateResidentOwner(req, res) {
        const data = await usersServices.updateResidentOwner(
            req.params.id,
            req.body,
            req,
            res
        );
        return;
    }

    /**
     * @description: deleteResidentOwner For the Admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async deleteResidentOwner(req, res) {
        const data = await usersServices.deleteResidentOwner(
            req.params.id,
            req,
            res
        );
        return;
    }

    /**
     * @description: securityPage For the Admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async securityPage(req, res) {
        const data = await usersServices.securityPage(req, res);
        return;
    }

    /**
     * @description: addSecurity For the Admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async addSecurity(req, res) {
        const data = await usersServices.addSecurity(req, res);
        return;
    }

    /**
     * @description: technicianPage For the Admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async technicianPage(req, res) {
        const data = await usersServices.technicianPage(req, res);
        return;
    }
}

export default usersController;
