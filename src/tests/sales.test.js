

var assert = require("chai").assert;
var op = require("../scripts/sales/sales");
 


describe("Sales unit tests using ASSERT interface from CHAI module: ", function() {
    describe("Check halfprice Function: ", function() {
        
        it("Check Function: If is pair is applied 2x1 ", function() {
            result = op.halfPrice(2,5);
            assert.equal(result, 5);
        }); 
        it("Check Function: If isn't pair is not applied 2x1 for all products ", function() {
            result = op.halfPrice(3,5);
            assert.equal(result, 10);
        }); 
    }); 
});

describe("Sales tests using ASSERT interface from CHAI module: ", function() {
    describe("Check saleOff Function: ", function() {
        it("Check Function: Products less than 3, will not applied discount ", function() {
            result = op.saleOff(2,20);
            assert.equal(result, 40);
        });  
        it("Check Function: Products  more than 3 or equal,It will have 5% off ", function() {
            result = op.saleOff(4,20);
            assert.equal(result, 76);
        });  
       
    }); 
});

describe("Sales tests using ASSERT interface from CHAI module: ", function() {
    describe("Check addProducts Function: ", function() {
        it("Case 1: Items: PANTS, TSHIRT, HAT Total: $32.50", function() {
            result = op.addProducts(1,1,1);
            assert.equal(result, 32.5);
        });
        it("Case 2: Items: 2PANTS, TSHIRT Total: $25", function() {
            result = op.addProducts(2,1);
            assert.equal(result, 25);
        });
        it("Case 3: Items: 1PANTS, 4TSHIRT Total: $81", function() {
            result = op.addProducts(1,4);
            assert.equal(result, 81);
        });
        it("Case 4: Items: 3PANTS, 3TSHIRT, HAT Total: $74.5", function() {
            result = op.addProducts(3,3,1);
            assert.equal(result, 74.5);
        });      
         
       
    }); 
});


  