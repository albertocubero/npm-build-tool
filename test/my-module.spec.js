var myModule 	= require('../src/my-module');
var assert  	= require('assert');

describe('myModule', function(){

	it('should sum 2 numbers', function () {
		var expectedSum = myModule.sum(1,2);
		assert.equal(3, expectedSum);
	});

});