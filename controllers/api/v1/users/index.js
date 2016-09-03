'use strict';

var path = require('path');
var basePath = path.resolve();
var config = require(basePath + '/config/config');
var v1 = config.versions.v1.prefix;

module.exports = function(app){

    app.get(v1 + '/user/all', function(req, res, next){
        var dataFromDb = [
            {
                id: "1",
                first_name: "Bruce",
                last_name: "Wayne",
                username: "batman",
                email: "iambatman@gmail.com"
            },
            {
                id: "2",
                first_name: "Tony",
                last_name: "Stark",
                username: "ironman",
                email: "geniusbillionareplayboyphilantropist@gmail.com"
            }
        ];

        req.users = {
            success: 1,
            message: 'Users retrieved successfully',
            data: dataFromDb
        };

        next();
    }, function(req, res, next){
        res.json(req.users);
    });

};