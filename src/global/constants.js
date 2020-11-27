export const HTTP_STATUS = Object.freeze({
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  UN_PROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500
});

export const VALIDATION = Object.freeze({
  REQUIRED: 'validation.required',
  INVALID: 'validation.invalid',
  EXISTED: 'validation.existed',
  NOT_EXISTED: 'validation.not.existed'
});
