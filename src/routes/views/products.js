const express = require("express")
const router = express.Router()


// Controllers
import { getProducts } from '../../scripts/db/orm';
var products = null

router.get("/", async function(req, res, next) {
  await getProducts().then(val => products=val)
  try {
    res.render("products", { products });
  } catch (err) {
    next(err);
  }
});

module.exports = router;