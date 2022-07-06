const { ShoppingCartService } = require('../services');
const _ = require('lodash');

class ShoppingCartController {

    static async create(req, res) {
        try {
            let response = await ProductService.create();
            res.send(response);
        } catch (error) {
            console.log("Algo salio mal al crear el carrito : " + error.message);
        }
    }

    static async deleteCart(req, res) {
        try {
            let response = await ProductService.deleteCart(req.params.id);
            res.send(response);           
        } catch (error) {
            console.log("Algo salio mal al borrar el carrito : " + error.message);
        }
    }
    
    static async getAllProducts(req, res){
        try {
            let response = await ProductService.getAllProducts(req.params.id);
            res.send(response);             
        } catch (error) {
            console.log("Algo salio mal al obtener los productos: " + error.message);
        }
    }    

    static async deleteProduct(req, res){
        try {
            let response = await ProductService.deleteProduct(req.params.id, req.params.idProduct);
            res.send(response);             
        } catch (error) {
            console.log("Algo salio mal al borrar el carrito : " + error.message);
        }
    }     
    
    static async addProducts(req, res){
        try {
            let response = await ProductService.deleteProduct(req.params.id, req,body.products);
            res.send(response);             
        } catch (error) {
            console.log("Algo salio mal al agregar los productos : " + error.message);
        }
    }    
}

module.exports = ShoppingCartController;