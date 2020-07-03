const Joi = require('joi');

const { lessonValidators: { idValidator } } = require('../../validators');

module.exports = (req, res, next) => {
    const { lessonId } = req.params;
    const { error } = Joi.validate(+lessonId, idValidator);

    if (error) { throw new Error('not valid id'); }

    next();
};
