import { FieldErrors } from '@models/FieldErrors';
import Joi from 'joi';

function getFieldsErrors(objErrors: Joi.ValidationResult) {
  const errors: FieldErrors = {};

  if (objErrors.error) {
    objErrors.error.details.forEach((error) => {
      errors[error.path.join('')] = error.message;
    });
  }

  return errors;
}

export function validateForm<T>(values: T, fieldsValidations: any) {
  const schema = Joi.object(fieldsValidations);

  return getFieldsErrors(schema.validate(values, { abortEarly: false }));
}
