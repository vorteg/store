import app from './app.conf'
import '@babel/polyfill'
var SalesOperations = require('./scripts/sales/sales')

const port = process.env.port || 3000

async function main () {
  await app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}/`)
  })
};


main()
