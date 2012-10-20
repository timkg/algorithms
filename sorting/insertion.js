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
			  , leftIndex
			  , tempValue;
			for(currentIndex = 1; currentIndex < len; currentIndex++) {
				leftIndex = currentIndex - 1;
				currentValue = inputArray[currentIndex];
				while( leftIndex >= 0  && inputArray[leftIndex] > currentValue  ) {
					inputArray[leftIndex+1] = inputArray[leftIndex];
					leftIndex = --leftIndex;
				}
				inputArray[leftIndex+1] = currentValue;
			}
			return inputArray;

		},

		reverseSort: function( inputArray ) {
			if( Object.prototype.toString.call( inputArray ) != '[object Array]' ) {
				throw new Error("insertion.reverseSort() called on something that is not an array.");
			}
			var len = inputArray.length;
			if(len < 2) {
				return inputArray;
			}
			var currentIndex
			  , currentValue
			  , leftIndex
			  , tempValue;
			for(currentIndex = 1; currentIndex < len; currentIndex++) {
				leftIndex = currentIndex - 1;
				currentValue = inputArray[currentIndex];
				while( leftIndex >= 0  && inputArray[leftIndex] < currentValue  ) {
					inputArray[leftIndex+1] = inputArray[leftIndex];
					leftIndex = --leftIndex;
				}
				inputArray[leftIndex+1] = currentValue;
			}
			return inputArray;

		}

	};

	return insertion;
})

