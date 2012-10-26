if (typeof define !== 'function') { var define = require('amdefine')(module) }

define([], function(){
	var Stack = function() {

		// private
		var elements = [];

		// public
		this.top = 0;
		this.isEmpty = function() {};
		this.push = function() {};
		this.pop = function() {};
	};

	return Stack;
})

