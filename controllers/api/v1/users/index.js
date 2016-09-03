'use strict';

var path = require('path');
var basePath = path.resolve();
var config = require(basePath + '/config/config');
var v1 = config.versions.v1.prefix;

module.exports = function(app){

    console.log(v1 + '/user');

};