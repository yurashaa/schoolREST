const { Router } = require('express');

const { lessonController } = require('../../controllers');
const {
    lessonMiddlewares: {
        isIdValid,
        isLessonExists,
    },
} = require('../../middlewares');

const router = Router();

router.get('/', lessonController.getAllLessons);
router.get('/:lessonId',
    isIdValid,
    isLessonExists,
    lessonController.getLessonById);

module.exports = router;
