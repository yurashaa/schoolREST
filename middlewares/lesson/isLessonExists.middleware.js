const { lessonService } = require('../../services');

module.exports = async (req, res, next) => {
    const { lessonId } = req.params;
    const lesson = await lessonService.getLessonById(lessonId);

    if (!lesson) { throw new Error('lesson doesnt exists'); }

    req.lesson = lesson;

    next();
};
