const ProductModel = require('../../models/product');
const DaoCrudMongo = require('./DaoCrudMongo');

class DaoProduct extends DaoCrudMongo{

    constructor(){
        super(ProductModel)
    }
  
    async addProduct(product) {
        const id = ObjectId();
        return await this.saveOne({ _id: id } , {id,...product});
    } 
}

module.exports = DaoProduct;