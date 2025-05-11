import userServices from "./users.service";

class userController {
    /**
     * @description: Users page from Accounts
     * @param {*} req
     * @param {*} res
     */
    static async usersPage(req, res) {
        const data = await userServices.usersPage(req, res);
        return;
    }
}

export default userController;
