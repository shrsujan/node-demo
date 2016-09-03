'use strict';

var user = require('./tbl_users');

module.exports = {

    read: function(options, success, error){
        user.findAll({where: options.where}).then(success, error);
    },

    readOne: function(options, success, error){
        user.findOne({where: options.where}).then(success, error);
    }

};