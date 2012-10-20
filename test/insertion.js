var assert = require("assert");
var insertion = require("../sorting/insertion");

describe("Insertion sort", function() {
	
	describe("insert", function() {
		it("should define an insert object", function() {
			assert.equal(typeof insertion, "object");
		})
	})
	describe("#sort()", function() {
		it("should define a sort() method", function() {
			assert.equal(typeof insertion.sort, "function");
		})
		it("should sort an array of numbers", function() {
			assert.deepEqual([1, 2, 3, 3, 5, 6, 7, 8, 8, 8, 8, 9], insertion.sort([9,5,2,7,8,1,3,8,6,3,8,8]));
		})
	})
})