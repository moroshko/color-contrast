const THREE_DIGIT_HEX_COLOR_REGEX = /^#[0-9a-fA-F]{3}$/;
const SIX_DIGIT_HEX_COLOR_REGEX = /^#[0-9a-fA-F]{6}$/;

function isValid(str) {
  return THREE_DIGIT_HEX_COLOR_REGEX.test(str) ||
         SIX_DIGIT_HEX_COLOR_REGEX.test(str);
}

function str2sixDigitHex(str) {
  if (SIX_DIGIT_HEX_COLOR_REGEX.test(str)) {
    return str;
  }

  if (THREE_DIGIT_HEX_COLOR_REGEX.test(str)) {
    return '#' + str[1] + str[1] + str[2] + str[2] + str[3] + str[3];
  }

  return null;
}

function str2rgb(str) {
  const sixDigitHex = str2sixDigitHex(str);

  if (sixDigitHex === null) {
    return null;
  }

  return {
    r: parseInt(sixDigitHex.slice(1, 3), 16),
    g: parseInt(sixDigitHex.slice(3, 5), 16),
    b: parseInt(sixDigitHex.slice(5, 7), 16)
  };
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

function str2hsl(str) {
  const sixDigitHex = str2sixDigitHex(str);

  if (sixDigitHex === null) {
    return null;
  }

  const rgb = str2rgb(sixDigitHex);

  if (rgb === null) {
    return null;
  }

  return rgb2hsl(rgb);
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
function contrast(str1, str2) {
  const L1 = relativeLuminance(str2rgb(str1));
  const L2 = relativeLuminance(str2rgb(str2));

  if (L1 < L2) {
    return (L2 + 0.05) / (L1 + 0.05);
  }

  return (L1 + 0.05) / (L2 + 0.05);
}

export default {
  isValid,
  contrast,
  str2hsl
};
