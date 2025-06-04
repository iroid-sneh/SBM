import eventsServices from "./events.service";

class eventsController {
    /**
     * @description: eventsPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async eventsPage(req, res) {
        const data = await eventsServices.eventsPage(req, res);
        return;
    }
}

export default eventsController;
