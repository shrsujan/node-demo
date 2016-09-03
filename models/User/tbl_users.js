'use strict';

var basePath = require('path').resolve();

var db = require(basePath + '/util/db');
var Sequelize = require('sequelize');

var users = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    first_name: {
        type: Sequelize.STRING,
        field: 'first_name',
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING,
        field: 'last_name',
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        field: 'username',
        unique: true,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        field: 'email',
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
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

users.sync();

module.exports = users;