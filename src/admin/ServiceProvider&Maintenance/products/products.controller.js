import productsServices from "./products.service";

class productsController {
    /**
     * @description: Products Page for admin
     * @param {*} req
     * @param {*} res
     */
    static async productsPage(req, res) {
        const data = await productsServices.productsPage(req, res);
        return;
    }

    /**
     * @description: addServicePage for admin
     * @param {*} req
     * @param {*} res
     */
    static async addServicePage(req, res) {
        const data = await productsServices.addServicePage(req, res);
        return;
    }
}

export default productsController;
