export const errorHandler = (statusCode, message) => {
  const error = new Error(); //js error constructor
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
