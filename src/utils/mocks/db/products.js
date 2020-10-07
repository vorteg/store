const productsMock = {"data":[
  {
    "id":1,
    "name":"Hat",
    "price":7.5,
    "image":"https://images.pexels.com/photos/744365/pexels-photo-744365.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "tags":"HAT"
  },
  { 
    "id":2,
    "name":"T-Shirt",
    "price":20,
    "image":"https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "tags":"T-SHIRT"
  },
  { 
    "id":3,
    "name":"Pants",
    "price":5,
    "image":"https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "tags":"PANTS"
  }
  ]}

  function filteredProductsMock(tag) {
    return productsMock.filter(product => product.tags.includes(tag));
  }
  
  class ProductsServiceMock {
    async getProducts() {
      return Promise.resolve(productsMock);
    }
  
    async createProduct() {
      return Promise.resolve("6bedb1267d1ca7f3053e2875");
    }
  }
  
  module.exports = {
    productsMock,
    filteredProductsMock,
    ProductsServiceMock
  };