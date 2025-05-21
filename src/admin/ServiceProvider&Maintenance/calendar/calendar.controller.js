import calendarServices from "./calendar.service";

class calendarController {
    /**
     * @description: calendarPage for admin
     * @param {*} req
     * @param {*} res
     */
    static async calendarPage(req, res) {
        const data = await calendarServices.calendarPage(req, res);
        return;
    }
}

export default calendarController;
