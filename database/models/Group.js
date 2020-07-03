const {modelNames, tableNames} = require('../../constants');

module.exports = (sequelize, DataTypes) => {
    const Group = sequelize.define(modelNames.GROUP, {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },

            name: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },

            number_of_students: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: tableNames.GROUPS,
            timestamps: false,
        },
    );

    return Group;
};
