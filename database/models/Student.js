const {modelNames, tableNames} = require('../../constants');

module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define(modelNames.STUDENT, {
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

            group_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            age: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: tableNames.STUDENTS,
            timestamps: false,
        },
    );

    const Group = sequelize.import('./Group.js');

    Student.belongsTo(Group, {foreignKey: 'group_id'});

    return Student;
};
