function isFloat(str) {
  const float = parseFloat(str);

  return !isNaN(float);
}

export default {
  isFloat
};
