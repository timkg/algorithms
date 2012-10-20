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
			assert.deepEqual([9, 8, 8, 8, 8, 7, 6, 5, 3, 3, 2, 1], insertion.reverseSort([1,5,2,7,8,9,3,8,6,3,8,8]));
			assert.deepEqual([9, 8, 8, 8, 8, 7, 6, 5, 3, 3, 2, 1], insertion.reverseSort([9,5,2,7,8,1,3,8,6,3,8,8]));
			assert.deepEqual([9, 8, 8, 8, 8, 7, 6, 5, 3, 3, 2, 1], insertion.reverseSort([8,5,2,7,8,9,3,1,6,3,8,8]));
			assert.deepEqual([9, 8, 8, 8, 8, 7, 6, 5, 3, 3, 2, 1], insertion.reverseSort([8,5,2,7,8,9,3,8,6,3,8,1]));
			assert.deepEqual([9, 8, 8, 8, 8, 7, 6, 5, 3, 3, 2, 1], insertion.reverseSort([8,5,2,7,8,8,3,1,6,3,8,9]));
		})
	})
	describe("#reverseSort()", function() {
		it("should define a reverseSort() method", function() {
			assert.equal(typeof insertion.reverseSort, "function");
		})
		it("should sort an array of numbers in decreasing order", function() {
			assert.deepEqual([9, 8, 8, 8, 8, 7, 6, 5, 3, 3, 2, 1], insertion.reverseSort([1,5,2,7,8,9,3,8,6,3,8,8]));
			assert.deepEqual([9, 8, 8, 8, 8, 7, 6, 5, 3, 3, 2, 1], insertion.reverseSort([9,5,2,7,8,1,3,8,6,3,8,8]));
			assert.deepEqual([9, 8, 8, 8, 8, 7, 6, 5, 3, 3, 2, 1], insertion.reverseSort([8,5,2,7,8,9,3,1,6,3,8,8]));
			assert.deepEqual([9, 8, 8, 8, 8, 7, 6, 5, 3, 3, 2, 1], insertion.reverseSort([8,5,2,7,8,9,3,8,6,3,8,1]));
			assert.deepEqual([9, 8, 8, 8, 8, 7, 6, 5, 3, 3, 2, 1], insertion.reverseSort([8,5,2,7,8,8,3,1,6,3,8,9]));
		})
	})
})