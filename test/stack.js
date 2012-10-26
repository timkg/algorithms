var assert = require("assert");
var Stack = require("../data_structures/stack");

describe("Stack data structure", function() {
	
	describe("Stack constructor function", function() {
		it("should define a Stack function", function() {
			assert.equal(typeof Stack, "function");
		})
		it("should allow to instantiate new instances of Stack", function() {
			var stack1 = new Stack();
			assert.equal(stack1.constructor, Stack);	
		})
	})
	describe("Stack instances", function() {
		it("should define a top property, which is a Number", function() {
			var stack1 = new Stack();
			assert.equal(typeof stack1.top, "number");
		})
		it("should have an elements property which is not accessible from the outside", function() {
			var stack1 = new Stack();
			assert.equal(typeof stack1.elements, "undefined");
		})
		it("should define a push() method", function() {
			var stack1 = new Stack();
			assert.equal(typeof stack1.push, "function");
		})
		it("should define a pop() method", function() {
			var stack1 = new Stack();
			assert.equal(typeof stack1.pop, "function");
		})
	})

})