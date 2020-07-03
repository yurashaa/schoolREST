const {modelNames, tableNames} = require('../../constants');

module.exports = (sequelize, DataTypes) => {
    const Lesson = sequelize.define(modelNames.LESSON, {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },

            topic: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            teacher_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            group_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            audience: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            time: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            tableName: tableNames.LESSONS,
            timestamps: false,
        },
    );

    const Teacher = sequelize.import('./Teacher.js');
    const Group = sequelize.import('./Group.js');

    Lesson.belongsTo(Teacher, {foreignKey: 'teacher_id'});
    Lesson.belongsTo(Group, {foreignKey: 'group_id'});

    return Lesson;
};
