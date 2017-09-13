"use strict";

const CartController = require("./Controllers/CartController"),
      CalculateController = require("./Controllers/CalculateController");

module.exports = () => {

    /**
     * GET Example LISTS
     */
    global.server.get('/cart', CartController.getCart);

    /**
     * GET Example LISTS
     */
    global.server.get('/cart', CartController.getCart);


    /**
     * POST Example ADD PRODUCT
     */
    global.server.post('/cart/add' ,CartController.postAddProduct);


    /**
     * POST Example DELETE PRODUCT FROM CART
     */
    global.server.del('/cart/add' ,CartController.postRemoveProduct);



    /**
     * POST Example DELETE PRODUCT FROM CART
     */
    global.server.get('/cart/calculate' , CalculateController.getCalculate);


    /**
     * POST Example DELETE PRODUCT FROM CART
     */
    global.server.get('/cart/calculate' , CalculateController.getShippingFee);


}