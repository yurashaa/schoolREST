const { Router } = require('express');

const lessonRouter = require('./lesson');

const router = Router();

router.use('/lessons', lessonRouter);

module.exports = router;
