var assert = require("assert");
var stack = require("../data_structures/stack");

describe("Stack data structure", function() {
	
	describe("stack", function() {
		it("should define a stack object", function() {
			assert.equal(typeof stack, "object");
		})
		it("should define a top property, which is a Number", function() {
			assert.equal(typeof stack.top, "number");
		})
		it("should have an elements property which is not accessible from the outside", function() {
			assert.equal(typeof stack.elements, "undefined");
		})
		it("should define a push() method", function() {
			assert.equal(typeof stack.push, "function");
		})
		it("should define a pop() method", function() {
			assert.equal(typeof stack.pop, "function");
		})
	})

})