'use strict';

var basePath = require('path').resolve();

var db = require(basePath + '/util/db');
var Sequelize = require('sequelize');

var courses = db.define('course', {
    id: {
        type: Sequelize.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        field: 'name',
        allowNull: false
    },
    isDeleted: {
        type: Sequelize.BOOLEAN,
        field: 'isDeleted',
        allowNull: false,
        defaultValue: 0
    },
    createdAt: {
        type: Sequelize.DATE,
        field: 'createdAt',
        allowNull: false
    },
    updatedAt: {
        type: Sequelize.DATE,
        field: 'updatedAt',
        allowNull: false
    }
});

courses.sync();

module.exports = courses;