const {Types: {ObjectId}} = require('mongoose');
let { DaoProduct } = app.dbManagement;
DaoProduct = new DaoProduct();

class ProductService {

    static async getAll() {
        return await DaoProduct.getAll();
    }

    static async getById(id) {
        return await DaoProduct.getById(id);
    }    

    static async addProduct(product) {
        return await DaoProduct.addProduct(product);
    }    
    
    static async updateProduct(producto, id) {
        return await DaoProduct.update(product);
    }   

    static async deleteProduct(id) {
        return await DaoProduct.delete(id);
    }      

}

module.exports = ProductService;