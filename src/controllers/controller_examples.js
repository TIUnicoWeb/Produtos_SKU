let me,app, cache,
utils = require('../utils.js'),
async = require('async'),
ObjectID = require('mongodb').ObjectID;
_ = require('underscore');
request = require('request');


module.exports = {

	init: function(appPass,next) {
		
		app = appPass;
		me = this;

		cache = [];
		
		next();
	},

	



}