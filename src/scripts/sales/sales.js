var halfPrice = function (units, price) {
  if (units % 2 == 0) {
    return (units * price) / 2
  };

  return ((((--units) * price) / 2) + price)
}




var saleOff = function (units, price, percent=5){
  if (units >= 3) {
    let save = (price * percent) / 100
    return units * (price - save)
  };

  return (units * price)
}


var addProducts = function (pants,tshir,hat=0){
    pantsPrice = this.halfPrice(pants,5)
    tshirtPrice = this.saleOff(tshir,20)
    hatPrice = hat*7.5
    return hatPrice + pantsPrice + tshirtPrice
}
module.exports = { halfPrice, saleOff, addProducts}