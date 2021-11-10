const OrderPanding = require('./Order-Panding')
 class ShopingOrder {
  constructor(){
      this.state = new OrderPanding(this)
  }
  getState(){
      return this.state
  }
  setState(state){      
      this.state = state
  }
  getStateName(){
      return this.state.getName()
  }
  approvePayment(){
        this.state.approvePayment()
    }
  rejectPayment(){
      this.state.rejectPayment()
  }
  shipOrder(){
      this.state.shipOrder()
  
  }
}
module.exports = ShopingOrder