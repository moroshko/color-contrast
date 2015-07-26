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
  TOGGLE_IS_FONT_BOLD
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

export function updateBackgroundColorHue(value) {
  return {
    type: UPDATE_BACKGROUND_COLOR_HUE,
    value
  };
}

export function updateBackgroundColorSaturation(value) {
  return {
    type: UPDATE_BACKGROUND_COLOR_SATURATION,
    value
  };
}

export function updateBackgroundColorLightness(value) {
  return {
    type: UPDATE_BACKGROUND_COLOR_LIGHTNESS,
    value
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

export function updateForegroundColorHue(value) {
  return {
    type: UPDATE_FOREGROUND_COLOR_HUE,
    value
  };
}

export function updateForegroundColorSaturation(value) {
  return {
    type: UPDATE_FOREGROUND_COLOR_SATURATION,
    value
  };
}

export function updateForegroundColorLightness(value) {
  return {
    type: UPDATE_FOREGROUND_COLOR_LIGHTNESS,
    value
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
