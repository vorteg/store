

module.exports = class SalesOperations {
    constructor(units, price, percent=5){
        this.units = units;
        this.price = price;
        this.percent = percent;
    }
   get runHalfprice(){
       return this.halfPrice();
   }

   get runSaleoff(){
       return this.saleOff();
   }
    
   halfPrice(){
    if(this.units % 2 == 0){
        return (this.units*this.price)/2;
    };
    
    
    return ((((--this.units)*this.price)/2) + this.price);
   }

   saleOff(){
    if(this.units >= 3){
        let save = (this.price * this.percent)/100;
        return this.units*(this.price-save);
    };

    return (this.units*this.price);
    }
}

