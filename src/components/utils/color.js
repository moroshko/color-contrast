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

function rgb2hsl({ r, g, b }) {
  r = r / 255;
  g = g / 255;
  b = b / 255;

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

// http://www.w3.org/WAI/GL/wiki/Relative_luminance
function relativeLuminance({ r, g, b }) {
  [r, g, b] = [r, g, b].map(c => {
    c = c / 255;

    if (c <= 0.03928) {
      return c / 12.92;
    }

    return Math.pow((c + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html#key-terms
function contrastRatio(rgb1, rgb2) {
  const L1 = relativeLuminance(rgb1);
  const L2 = relativeLuminance(rgb2);

  if (L1 < L2) {
    return (L2 + 0.05) / (L1 + 0.05);
  }

  return (L1 + 0.05) / (L2 + 0.05);
}

export default {
  isValid,
  contrast,
  rgb2hsl,
  contrastRatio
};
