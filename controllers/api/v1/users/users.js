'use strict';

var basePath = require('path').resolve();
var User = require(basePath + '/models/User');

module.exports = {

    fetchAllUsers: function(req, res, next){
        var options = {
            where: {
                isDeleted: 0
            }
        };

        var success = function(result){
            if(result == ''){
                req.cdata = {
                    success: 1,
                    message: 'No users'
                };
                next();
            } else {
                req.cdata = {
                    success: 1,
                    message: 'Users retrieved successfully',
                    data: result
                };
                next();
            }
        };

        var error = function(err){
            next(err);
        };

        User.read(options, success, error);
    },

    fetchOneUser: function(req, res, next){
        if(!req.params || !req.params.id){
            return next("ID not provided");
        }

        var options = {
            where: {
                id: req.params.id,
                isDeleted: 0
            }
        };

        var success = function(result){
            if(result == null){
                req.cdata = {
                    success: 0,
                    message: 'No such user'
                };
                next();
            } else {
                req.cdata = {
                    success: 1,
                    message: 'User retrieved successfully',
                    data: result
                };
                next();
            }
        };

        var error = function(err){
            next(err);
        };

        User.readOne(options, success, error);
    }

};