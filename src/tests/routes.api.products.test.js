const assert = require("assert");
const proxyquire = require("proxyquire");


const {
    productsMock,
    ProductsServiceMock
  } = require("../utils/mocks/db/products");

const testServer = require("../utils/testServer");


describe("Functional route api tests", function() {
    const route = proxyquire("../routes/api/products", {
      "../../scripts/db/products.orm": ProductsServiceMock
    });

    const request = testServer(route);

  describe("GET /products", function() {
    it("should respond with status 200", function(done) {
      request.get("/api/products").expect(200, done);
    });

    it("should respond with content type json", function(done) {
      request.get("/api/products").expect("Content-type", /json/, done);
    });

    it("should respond with not error", function(done) {
      request.get("/api/products").end((err, res) => {
        assert.strictEqual(err, null);
        done();
      });
    });

    it("should respond with content type json", function(done) {
      request.get("/api/products").expect("Content-type", /json/, done);
    });

    it("should respond with the list of products", function(done) {
      request.get("/api/products").end((err, res) => {
        assert.notStrictEqual(res.body, {
          data: productsMock
        });
        done();
      });
    });
  });
});