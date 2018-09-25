'use strict';

module.exports = app => {
    const {
        STRING,
        INTEGER
    } = app.Sequelize;

    const User = app.model.define('user', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: STRING(),
        sex: INTEGER,
        age: INTEGER
    }, {
        freezeTableName: true,
        timestamps: false,
    });

    return User;
};