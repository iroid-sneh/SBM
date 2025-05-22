import invoicesServices from "./invoices.service";

class invoicesController {
    /**
     * @description: invoicesPage For admin
     * @param {*} req
     * @param {*} res
     */
    static async invoicesPage(req, res) {
        const data = await invoicesServices.invoicesPage(req, res);
        return;
    }
}

export default invoicesController;
