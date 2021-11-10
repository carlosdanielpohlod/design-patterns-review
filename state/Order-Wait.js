const OrderReject = require('./Order-Reject')
const OrderApprove = require('./Order-Approved')
module.exports = class OrderWait {
    constructor(ShopingOrder){
        this.name = 'OrderWait';
        this.order = ShopingOrder
    }
    getName(){
        return this.name;
    }
    approvePayment(){
        this.order.setState(new OrderApprove(this.order));
    }
    rejectPayment(){
        this.order.setState(new OrderReject(this.order));
    }
    waitPayment(){
        console.log('Já em espera')
    }
    shipOrder(){
        console.log('pedido não pode ser enviado pois esta rejeitado')
    }
}