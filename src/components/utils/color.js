import color from 'color';

function isValid(str) {
  try {
    const colorObj = color(str);
  } catch (error) {
    return false;
  }

  return true;
}

export default {
  isValid
};
