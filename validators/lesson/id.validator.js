const Joi = require('joi');

module.exports = Joi.number().positive().integer().required();
