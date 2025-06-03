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
     * @description: securityPage For the Admin Panel
     * @param {*} req
     * @param {*} res
     */
    static async securityPage(req, res) {
        const data = await usersServices.securityPage(req, res);
        return;
    }
}

export default usersController;
