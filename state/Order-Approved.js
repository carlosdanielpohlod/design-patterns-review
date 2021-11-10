const ShopingOrder = require("./Shoping-order");
const OrderWait = require("./Order-Wait");
const OrderReject = require("./Order-Reject");
module.exports = class OrderAproved{
    constructor(ShopingOrder){
        this.name = 'OrderAproved';
        this.order = ShopingOrder
    }
    getName(){
        return this.name;
    }
    approvePayment(){
        console.log('ja esta aprovado');
    }
    rejectPayment(){
        this.order.setState(new OrderReject(this.order));
    }
    waitPayment(){
        this.order.setState(new OrderWait(this.order));
    }
    shipOrder(){
        console.log("enviando")
    }
}