'use strict';

var basePath = require('path').resolve();
var Course = require(basePath + '/models/Course');

module.exports = {

    // function to fetch all courses from db
    fetchAllCourses: function(req, res, next){
        var options = {
            where: {
                isDeleted: 0
            }
        };

        var success = function(result){
            if(result == ''){
                req.cdata = {
                    success: 1,
                    message: 'No courses'
                };
                next();
            } else {
                req.cdata = {
                    success: 1,
                    message: 'Courses retrieved successfully',
                    data: result
                };
                next();
            }
        };

        var error = function(err){
            next(err);
        };

        Course.read(options, success, error);
    },

    // function to fetch a single course using ID from db
    fetchOneCourse: function(req, res, next){
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
                    message: 'No such course'
                };
                next();
            } else {
                req.cdata = {
                    success: 1,
                    message: 'Course retrieved successfully',
                    data: result
                };
                next();
            }
        };

        var error = function(err){
            next(err);
        };

        Course.readOne(options, success, error);
    },

    // function to add a course to db
    addCourse: function(req, res, next){
        var fields = ['name'];
        req.collected_data = {};
        fields.forEach(function(entry){
            if(typeof(req.body[entry]) != 'undefined'){
                req.collected_data[entry] = req.body[entry];
            } else {
                return next(entry + ' is not provided');
            }
        });

        var options = {
            data: req.collected_data
        };

        var success = function(result){
            if(!result.$options.isNewRecord){
                return next("New course not added");
            } else {
                req.cdata = {
                    success: 1,
                    message: 'New course successfully added',
                    data: result
                };
                next();
            }
        };

        var error = function(err){
            next(err);
        };

        Course.create(options, success, error);

    },

    // function to add a course to db
    updateCourse: function(req, res, next){
        if(!req.params || !req.params.id){
            return next("ID not provided");
        }

        var fields = ['name'];
        req.collected_data = {};
        fields.forEach(function(entry){
            if(typeof(req.body[entry]) != 'undefined'){
                req.collected_data[entry] = req.body[entry];
            } else {
                return next(entry + ' is not provided');
            }
        });

        var options = {
            data: req.collected_data,
            where: {
                isDeleted: 0,
                id: req.params.id
            }
        };

        var success = function(result){
            if(result[0] == ''){
                return next("Course not updated");
            } else {
                req.cdata = {
                    success: 1,
                    message: 'Course successfully updated'
                };
                next();
            }
        };

        var error = function(err){
            next(err);
        };

        Course.update(options, success, error);

    },

    // function to delete a course from db
    deleteCourse: function(req, res, next){
        if(!req.params || !req.params.id){
            return next("ID not provided");
        }

        var options = {
            data: {
                isDeleted: 1
            },
            where: {
                id: req.params.id,
                isDeleted: 0
            }
        };

        var success = function(result){
            if(result[0] == ''){
                return next("No such course");
            } else {
                req.cdata = {
                    success: 1,
                    message: 'Course successfully deleted'
                };
                next();
            }
        };

        var error = function(err){
            next(err);
        };

        Course.update(options, success, error);
    },

    // function to restore a course from db
    restoreCourse: function(req, res, next){
        if(!req.params || !req.params.id){
            return next("ID not provided");
        }

        var options = {
            data: {
                isDeleted: 0
            },
            where: {
                id: req.params.id,
                isDeleted: 1
            }
        };

        var success = function(result){
            if(result[0] == ''){
                return next("No such deleted course");
            } else {
                req.cdata = {
                    success: 1,
                    message: 'Course successfully restored'
                };
                next();
            }
        };

        var error = function(err){
            next(err);
        };

        Course.update(options, success, error);
    }

};