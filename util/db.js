'use strict';

var Sequelize = require('sequelize');
var basePath = require('path').resolve();
var db = require(basePath + '/config/config').db;

var sequelize = new Sequelize(db.database, db.user, db.password, {
    host: db.host,
    dialect: db.dialect,
    timezone: db.timezone,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = sequelize;