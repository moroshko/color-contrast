import {
  UPDATE_ACCESSIBILITY_LEVEL,
  UPDATE_BACKGROUND_COLOR_VALUE,
  UPDATE_BACKGROUND_COLOR_HUE,
  UPDATE_BACKGROUND_COLOR_SATURATION,
  UPDATE_BACKGROUND_COLOR_LIGHTNESS,
  SWITCH_COLORS,
  UPDATE_FOREGROUND_COLOR_VALUE,
  UPDATE_FOREGROUND_COLOR_HUE,
  UPDATE_FOREGROUND_COLOR_SATURATION,
  UPDATE_FOREGROUND_COLOR_LIGHTNESS,
  UPDATE_FONT_SIZE,
  TOGGLE_IS_FONT_BOLD,
  UPDATE_FOCUSED_CHANNEL
} from 'flux/constants/actionTypes/app';

export function updateAccessibilityLevel(value) {
  return {
    type: UPDATE_ACCESSIBILITY_LEVEL,
    value
  };
}

export function updateBackgroundColorValue(value) {
  return {
    type: UPDATE_BACKGROUND_COLOR_VALUE,
    value
  };
}

export function updateBackgroundColorHue(hue) {
  return {
    type: UPDATE_BACKGROUND_COLOR_HUE,
    hue
  };
}

export function updateBackgroundColorSaturation(saturation) {
  return {
    type: UPDATE_BACKGROUND_COLOR_SATURATION,
    saturation
  };
}

export function updateBackgroundColorLightness(lightness) {
  return {
    type: UPDATE_BACKGROUND_COLOR_LIGHTNESS,
    lightness
  };
}

export function switchColors(value) {
  return {
    type: SWITCH_COLORS
  };
}

export function updateForegroundColorValue(value) {
  return {
    type: UPDATE_FOREGROUND_COLOR_VALUE,
    value
  };
}

export function updateForegroundColorHue(hue) {
  return {
    type: UPDATE_FOREGROUND_COLOR_HUE,
    hue
  };
}

export function updateForegroundColorSaturation(saturation) {
  return {
    type: UPDATE_FOREGROUND_COLOR_SATURATION,
    saturation
  };
}

export function updateForegroundColorLightness(lightness) {
  return {
    type: UPDATE_FOREGROUND_COLOR_LIGHTNESS,
    lightness
  };
}

export function updateFontSize(value) {
  return {
    type: UPDATE_FONT_SIZE,
    value
  };
}

export function toggleIsFontBold() {
  return {
    type: TOGGLE_IS_FONT_BOLD
  };
}

export function updateFocusedChannel(isBackgroundColor, colorChannel) {
  return {
    type: UPDATE_FOCUSED_CHANNEL,
    isBackgroundColor,
    colorChannel
  };
}
