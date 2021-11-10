
const OrderReject = require("./Order-Reject");
const OrderApproved = require("./Order-Approved");
module.exports = class OrderPanding{
    constructor(ShopingOrder){
        this.name = 'OrderPanding';
        this.order = ShopingOrder
    }
    getName(){
        return this.name;
    }
    approvePayment(){
        this.order.setState(new OrderApproved(this.order));
        console.log('pedido aprovado');
    }
    rejectPayment(){
        this.order.setState(new OrderReject(this.order));
    }
    waitPayment(){
        console.log('ja esta em espera');
    }
    shipOrder(){
        console.log('pedido nao pode ser enviado pois esta em espera')
    }
}