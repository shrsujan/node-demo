'use strict';

var path = require('path');
var basePath = path.resolve();
var config = require(basePath + '/config/config');
var v1 = config.versions.v1.prefix;
var courses = require('./courses');
var mw = require(basePath + '/middlewares/response');

module.exports = function(app){

    // API to fetch all active courses from courses table
    app.get(v1 + '/course/all', courses.fetchAllCourses, mw.respond, mw.error);

    // API to fetch a single course according to provided ID from the courses table
    app.get(v1 + '/course/fetch/:id', courses.fetchOneCourse, mw.respond, mw.error);

    // API to add a course to the courses table
    app.post(v1 + '/course/add', courses.addCourse, mw.respond, mw.error);

    // API to update a course to the courses table
    app.put(v1 + '/course/update/:id', courses.updateCourse, mw.respond, mw.error);

    // API to delete a course to the courses table
    app.delete(v1 + '/course/delete/:id', courses.deleteCourse, mw.respond, mw.error);

    // API to restore a course to the courses table
    app.get(v1 + '/course/restore/:id', courses.restoreCourse, mw.respond, mw.error);
};