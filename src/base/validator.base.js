import Joi from 'joi';

import { HTTP_STATUS } from 'global/constants';

import BaseError from './error.base';

class BaseValidator {
  validateWithSchema = (response, item, scheme) => {
    const { error } = Joi.validate(item, scheme);

    if (!error) {
      return false;
    }

    response
      .status(HTTP_STATUS.UN_PROCESSABLE_ENTITY)
      .json(new BaseError(error));

    return true;
  }
}

export default BaseValidator;
