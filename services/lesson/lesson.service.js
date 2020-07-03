const db = require('../../database').getInstance();
const { modelNames: { LESSON, GROUP, TEACHER } } = require('../../constants');

module.exports = {
    getAllLessons: () => {
        const LessonModel = db.getModel(LESSON);
        const TeacherModel = db.getModel(TEACHER);
        const GroupModel = db.getModel(GROUP);

        return LessonModel.findAll({
            include: [
                { model: TeacherModel },
                { model: GroupModel },
            ],
        });
    },

    getLessonById: (lessonId) => {
        const LessonModel = db.getModel(LESSON);
        const TeacherModel = db.getModel(TEACHER);
        const GroupModel = db.getModel(GROUP);

        return LessonModel.findByPk(lessonId, {
            include: [
                { model: TeacherModel },
                { model: GroupModel },
            ],
        });
    },
};
