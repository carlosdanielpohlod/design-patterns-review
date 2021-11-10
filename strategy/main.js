class Ecommerce{
    constructor(price){
        this.price = price;
        this.dicountStrategy = null
    }
    setDiscountStrategy(discountStrategy){
        this.dicountStrategy = discountStrategy;
    }
    getDiscount(){
        return this.dicountStrategy.getDiscount(this);
    }
}

class BasicDiscount{
    getDiscount(Ecommerce){
        return Ecommerce.price * 0.1;
    }
}
class DoubleDiscount{
    getDiscount(Ecommerce){
        return Ecommerce.price * 0.2;
    }
}
basicDescount = new BasicDiscount();
doubleDiscount = new DoubleDiscount();

ecommerce01 = new Ecommerce(100);
ecommerce01.setDiscountStrategy(basicDescount);
console.log(ecommerce01.getDiscount());

ecommerce01.setDiscountStrategy(doubleDiscount);
console.log(ecommerce01.getDiscount());