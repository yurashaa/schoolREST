const {modelNames, tableNames} = require('../../constants');

module.exports = (sequelize, DataTypes) => {
    const Teacher = sequelize.define(modelNames.TEACHER, {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },

            first_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            last_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            age: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: tableNames.TEACHERS,
            timestamps: false,
        },
    );

    return Teacher;
};
