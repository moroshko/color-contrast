import color from 'color';

const COLOR_REGEX = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/;

function isValid(str) {
  return COLOR_REGEX.test(str);
}

function contrast(color1, color2) {
  if (isValid(color1) && isValid(color2)) {
    return color(color1).contrast(color(color2));
  }

  return null;
}

function rgb2hsl(rgb) {
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const delta = max - min;

  let h, s, l;

  if (max === min) {
    h = 0;
  } else if (r === max) {
    h = (g - b) / delta;
  } else if (g === max) {
    h = 2 + (b - r) / delta;
  } else if (b === max) {
    h = 4 + (r - g) / delta;
  }

  h = Math.min(h * 60, 360);

  if (h < 0) {
    h += 360;
  }

  l = (min + max) / 2;

  if (max === min) {
    s = 0;
  } else if (l <= 0.5) {
    s = delta / (max + min);
  } else {
    s = delta / (2 - max - min);
  }

  s = s * 100;
  l = l * 100;

  return { h, s, l };
}

export default {
  isValid,
  contrast,
  rgb2hsl
};
