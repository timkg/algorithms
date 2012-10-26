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
	describe("Stack.isEmpty() method", function() {
		it("should return true for a new stack", function() {
			var stack1 = new Stack();
			assert.equal(stack1.isEmpty(), true);
		})
		it("should return false for a stack with elements", function() {
			var stack1 = new Stack();
			stack1.push( 1 );
			assert.equal(stack1.isEmpty(), false);
		})
	})
	describe("Stack.top property", function() {
		it("should be set to -1 for a new stack", function() {
			var stack1 = new Stack();
			assert.equal(stack1.top, -1);
		})
	})
	describe("Stack.push() method", function() {
		it("should return the inserted element", function() {
			var stack1 = new Stack();
			assert.equal(stack1.push('a'), 'a');
		})
		it("should increase the top property by one", function() {
			var stack1 = new Stack();
			stack1.push(1);
			assert.equal(stack1.top, 0);
		})
	})
	describe("Stack.pop() method", function() {
		it("should return null for a new stack", function() {
			var stack1 = new Stack();
			assert.equal(stack1.pop(), null);
		})
		it("should return the last element added to a stack", function() {
			var stack1 = new Stack();
			stack1.push('a');
			assert.equal(stack1.pop(), 'a');
		})
	})
})