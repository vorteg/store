const productsMock = {"data":[
  {
    "id":1,
    "name":"Hat",
    "price":7.5,
    "image":"https://images.pexels.com/photos/744365/pexels-photo-744365.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "tag":null
  },
  { 
    "id":2,
    "name":"T-Shirt",
    "price":20,
    "image":"https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?cs=srgb&dl=pexels-mnz-1598507.jpg&fm=jpg",
    "tag":null
  },
  { 
    "id":3,
    "name":
    "Pants",
    "price":5,
    "image":"https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?cs=srgb&dl=pexels-mnz-1598507.jpg&fm=jpg","tag":null},{"id":4,"name":"Test","price":5,"image":"https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?cs=srgb&dl=pexels-mnz-1598507.jpg&fm=jpg",
    "tag":null
  },
  {
    "id":4,
    "name":"Test",
    "price":5,
    "image":"https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?cs=srgb&dl=pexels-mnz-1598507.jpg&fm=jpg",
    "tag":null
}]}

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