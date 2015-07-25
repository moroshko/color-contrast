const FLOAT_REGEX = /^\d+(\.\d+)?$/;

function isFloat(str) {
  return FLOAT_REGEX.test(str);
}

export default {
  isFloat
};
