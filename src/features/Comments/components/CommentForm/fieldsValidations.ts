import Joi from 'joi';

export const commentFieldsValidations = {
  name: Joi.string().min(3).required().messages({
    'string.empty': 'comment.name.error.required',
    'string.min': 'comment.name.error.min.char',
  }),
  content: Joi.string().min(1).required().messages({
    'string.empty': 'comment.content.error.required',
  }),
};
