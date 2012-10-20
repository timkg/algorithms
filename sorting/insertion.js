if (typeof define !== 'function') { var define = require('amdefine')(module) }

define([], function(){
	var insertion = {
		sort: function( inputArray ) {
			if( Object.prototype.toString.call( inputArray ) != '[object Array]' ) {
				throw new Error("insertion.sort() called on something that is not an array.");
			}
			var len = inputArray.length;
			if(len < 2) {
				return inputArray;
			}
			var currentIndex
			  , currentValue
			  ,	leftIndex
			  , tempValue;
			for(currentIndex = 1; currentIndex < len; currentIndex++) {
				leftIndex = currentIndex - 1;
				currentValue = inputArray[currentIndex];
				while( leftIndex >= 0  && inputArray[leftIndex] > currentValue  ) {
					tempValue = inputArray[leftIndex+1];
					inputArray[leftIndex+1] = inputArray[leftIndex];
					inputArray[leftIndex] = tempValue;
					leftIndex = --leftIndex;
				}
			}
			return inputArray;

		}
	};

	return insertion;
})

