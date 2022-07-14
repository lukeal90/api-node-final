const ProductSchema = require('../../models/product');

class DaoShoppingCart{

    static async getAll() {
        console.log("LALa funciono")
    }

    static async getById(id) {
    }    

    static async addProduct(product) {
        console.log({_id : new ObjectId(), ...product})
        ProductSchema.create({...product});
    }    
    
    static async updateProduct(producto, id) {
    }   

    static async deleteProduct(id) {
    }      

}

module.exports = DaoShoppingCart;