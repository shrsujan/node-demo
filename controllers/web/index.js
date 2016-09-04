'use strict';

module.exports = function(app){

    app.get('/', function(req, res, next){
        res.render('layout');
    });

    app.get('/view/user', function(req, res, next){
        res.render('viewUser');
    });

    app.get('/add/user', function(req, res, next){
        res.render('addUser');
    });

    app.get('/view/course', function(req, res, next){
        res.render('viewCourse');
    });

    app.get('/add/course', function(req, res, next){
        res.render('addCourse');
    });

};