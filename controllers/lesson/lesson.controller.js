const { lessonService } = require('../../services');

module.exports = {
    getAllLessons: async (req, res) => {
        const lessons = await lessonService.getAllLessons();

        res.json(lessons);
    },

    getLessonById: async (req, res) => {
        const { lesson } = req;

        res.json(lesson);
    },
};
