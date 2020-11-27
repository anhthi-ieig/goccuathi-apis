import { isArray, isObject, last } from 'lodash';

class BaseError {
  static type;

  static field;

  static value;

  constructor(error) {
    /**
     * Joi validation
     */

    if (isArray(error.details)) {
      const { type, path } = error.details[0];
      const errorType = `validation.${last(type.split('.'))}`;

      this.type = errorType;
      this.field = path;

      return;
    }

    /**
     * Business validation
     */

    if (isObject(error)) {
      const { type, field, value } = error;

      this.type = type;
      this.field = field;
      this.value = value;
    }
  }
}

export default BaseError;
