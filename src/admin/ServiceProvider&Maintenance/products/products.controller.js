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
}

export default productsController;
