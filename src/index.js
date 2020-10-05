import app from './lib/app.conf'
import '@babel/polyfill'
var SalesOperations = require('./scripts/sales/sales')

const port = process.env.port || 3000



async function main () {
  await app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}/products`)
  })
};

const testSaleoff = new SalesOperations(3,20);
const testdosporuno = new SalesOperations(4,5);

console.log('Esto es un descuento del 5% por tres prendas ',testSaleoff.runSaleoff);
console.log('Esto es un dos por uno de 4 prendas ',testdosporuno.runHalfprice);
main()
