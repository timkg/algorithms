if (typeof define !== 'function') { var define = require('amdefine')(module) }

define([], function(){
	var Stack = function() {

		// private
		var elements = [];

		// public
		this.top = -1;
		this.isEmpty = function() {
			return (this.top === -1 ? true : false);
		};
		this.push = function( element ) {
			elements[++this.top] = element;
			return element;
		};
		this.pop = function() {
			if( this.top === -1 ) {
				return null;
			}
			return elements[this.top--];
		};
	};

	return Stack;
})

