const fs = require('fs').promises;
const path = require('path');
const pathFile = path.resolve(__dirname, "../../public/shoppingCart.json");
const _ = require('lodash');
const { ProductService } = require('../services');

class ShoppingCartService {

    static async create() {
                const carts = await this.getAll();
                let id = 1;
            
                if(carts.length > 0){
                    id = parseInt(carts[carts.length - 1].id) + 1;
                }
        
                const newCart = {id: id, products: []}
                carts.push(newCart);
                await fs.writeFile(pathFile, JSON.stringify(carts)); 
                return id;
    }

    static async getAll() {
            let carts =  await fs.readFile(pathFile);

            if(carts.length > 0 ){
                carts = JSON.parse(cart);
            }else{
                carts = [];
            }
            return carts;
    }    

    static async deleteCart(id) {
        let carts = await this.getAll();

        if(carts.some(c => c.id == id)) {
            carts = carts.filter(cart => cart.id != id);
            fs.writeFile(pathFile, JSON.stringify(carts));    
            return {"msg" : `Se elimino el carrito con el ID: ${id}`};                                              
        }
        return {'error' : "carrito no encontrado"};
    }
    
    static async getById(id) {
        const carts = await this.getAll();
        let response = carts.find(cart => cart.id == id) || null;
        return response;
    }  
    
    static async getAllProducts(id){
        const cart = this.getById(id);
        let productos = []

        if(!_.isNil(cart)){
            productos = cart.products;
        }

        return products;
    }    

    static async deleteProduct(idCart, idProduct){
        const cart = this.getById(idCart);
        let products = [];

        if(!_.isNil(cart)){
            products = cart.products;
            
            if(products.some(p => p.id == id)) {
                products = products.filter(producto => producto.id != idProduct);
 
                let carts =  await getAll();
                carts = carts.map( c => {
                    if(c.id == idCart){
                        c.products = products;
                    }
                    return c;
                });

                fs.writeFile(pathFile, JSON.stringify(carts));    
                return {"msg" : `Se elimino el producto con el ID: ${id}`};                                              
            }else{
                return {"msg" : `El carrito o producto no existe`};                                                             
            }
        }
    }     
    
    static async addProducts(idCart, products){
        let productsToAdd = [];
        let carts = await this.getAll();

        if(carts.some(c => c.id == idCart)) {

            products.forEach(p => {
                let produ = ProductService.getById(p);
    
                if(produ){
                    productsToAdd.push(produ);
                }
            });
            carts = carts.map( c => {
                if(c.id == idCart){
                    c.products = products;
                }
                return c;
            });            

            fs.writeFile(pathFile, JSON.stringify(carts));    
            return {"msg" : `Se agregaron al carrito los productos`};                                              
        }else{
            return {"msg" : `Carrito inexistente`};                                              
        }        
    }    
}

module.exports = ShoppingCartService;