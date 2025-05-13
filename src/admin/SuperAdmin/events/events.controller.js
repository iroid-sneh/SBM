import eventsServices from "./events.service";

class eventsController {
    /**
     * @description: Events page fot SUper Admin
     * @param {*} req
     * @param {*} res
     */
    static async eventsPage(req, res) {
        const data = await eventsServices.eventsPage(req, res);
        return;
    }
}

export default eventsController;
