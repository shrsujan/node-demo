'use strict';

var path = require('path');
var basePath = path.resolve();
var config = require(basePath + '/config/config');
var v1 = config.versions.v1.prefix;
var users = require('./users');
var mw = require(basePath + '/middlewares/response');

module.exports = function(app){

    app.get(v1 + '/user/all', users.fetchAllUsers, mw.respond, mw.error);
    app.get(v1 + '/user/fetch/:id', users.fetchOneUser, mw.respond, mw.error);

};