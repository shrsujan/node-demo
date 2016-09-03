'use strict';

var path = require('path');
var basePath = path.resolve();
var config = require(basePath + '/config/config');
var v1 = config.versions.v1.prefix;
var users = require('./users');
var mw = require(basePath + '/middlewares/response');

module.exports = function(app){

    // API to fetch all active users from users table
    app.get(v1 + '/user/all', users.fetchAllUsers, mw.respond, mw.error);

    // API to fetch a single user according to provided ID from the users table
    app.get(v1 + '/user/fetch/:id', users.fetchOneUser, mw.respond, mw.error);

    // API to add a user to the users table
    app.post(v1 + '/user/add', users.addUser, mw.respond, mw.error);

    // API to update a user to the users table
    app.put(v1 + '/user/update/:id', users.updateUser, mw.respond, mw.error);

    // API to delete a user to the users table
    app.delete(v1 + '/user/delete/:id', users.deleteUser, mw.respond, mw.error);

    // API to restore a user to the users table
    app.get(v1 + '/user/restore/:id', users.restoreUser, mw.respond, mw.error);
};