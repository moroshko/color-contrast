import color from 'color';

function isValid(str) {
  try {
    const colorObj = color(str);
  } catch (error) {
    return false;
  }

  return true;
}

function contrast(color1, color2) {
  if (isValid(color1) && isValid(color2)) {
    return color(color1).contrast(color(color2));
  }

  return null;
}

export default {
  isValid,
  contrast
};
