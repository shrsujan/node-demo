'use strict';

var course = require('./tbl_courses');

module.exports = {

    read: function(options, success, error){
        course.findAll({where: options.where}).then(success, error);
    },

    readOne: function(options, success, error){
        course.findOne({where: options.where}).then(success, error);
    },

    create: function(options, success, error){
        course.create(options.data).then(success, error);
    },

    update: function(options, success, error){
        course.update(options.data, {where: options.where}).then(success, error);
    }

};