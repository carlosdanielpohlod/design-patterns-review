const ShopingOrder = require('./Shoping-order')
const OrderWait = require('./Order-wait')

module.exports = class OrderReject {
    constructor(ShopingOrder){
        this.name = 'OrderRejected';
        this.order = ShopingOrder
    }
    getName(){
        return this.name;
    }
    approvePayment(){
        this.order.setState(new OrderApprove(this.order));
    }
    rejectPayment(){
        console.log('ja esta rejeitado');
    }
    waitPayment(){
        this.order.setState(new OrderWait(this.order));
    }
    shipOrder(){
        console.log('pedido não pode ser enviado pois esta rejeitado')
    }
}