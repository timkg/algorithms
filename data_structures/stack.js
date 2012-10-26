if (typeof define !== 'function') { var define = require('amdefine')(module) }

define([], function(){
	var stack = (function() {

		var top = 0
		  , elements = [];

		function isEmpty() {};
		function push() {};
		function pop() {};
		
		return {
			top: top
			, isEmpty: isEmpty
			, push: push
			, pop: pop
		}
	
	})();

	return stack;
})

