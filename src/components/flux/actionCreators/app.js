import {
  UPDATE_ACCESSIBILITY_LEVEL,
  UPDATE_BACKGROUND_COLOR_VALUE,
  UPDATE_BACKGROUND_COLOR_HUE,
  SET_BACKGROUND_COLOR_IS_HUE_FOCUSED,
  UPDATE_BACKGROUND_COLOR_SATURATION,
  SET_BACKGROUND_COLOR_IS_SATURATION_FOCUSED,
  UPDATE_BACKGROUND_COLOR_LIGHTNESS,
  SET_BACKGROUND_COLOR_IS_LIGHTNESS_FOCUSED,
  SWITCH_COLORS,
  UPDATE_FOREGROUND_COLOR_VALUE,
  UPDATE_FOREGROUND_COLOR_HUE,
  SET_FOREGROUND_COLOR_IS_HUE_FOCUSED,
  UPDATE_FOREGROUND_COLOR_SATURATION,
  SET_FOREGROUND_COLOR_IS_SATURATION_FOCUSED,
  UPDATE_FOREGROUND_COLOR_LIGHTNESS,
  SET_FOREGROUND_COLOR_IS_LIGHTNESS_FOCUSED,
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

export function updateBackgroundColorHue(hue) {
  return {
    type: UPDATE_BACKGROUND_COLOR_HUE,
    hue
  };
}

export function setBackgroundColorIsHueFocused() {
  return {
    type: SET_BACKGROUND_COLOR_IS_HUE_FOCUSED
  };
}

export function updateBackgroundColorSaturation(saturation) {
  return {
    type: UPDATE_BACKGROUND_COLOR_SATURATION,
    saturation
  };
}

export function setBackgroundColorIsSaturationFocused() {
  return {
    type: SET_BACKGROUND_COLOR_IS_SATURATION_FOCUSED
  };
}

export function updateBackgroundColorLightness(lightness) {
  return {
    type: UPDATE_BACKGROUND_COLOR_LIGHTNESS,
    lightness
  };
}

export function setBackgroundColorIsLightnessFocused() {
  return {
    type: SET_BACKGROUND_COLOR_IS_LIGHTNESS_FOCUSED
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

export function setForegroundColorIsHueFocused() {
  return {
    type: SET_FOREGROUND_COLOR_IS_HUE_FOCUSED
  };
}

export function updateForegroundColorSaturation(saturation) {
  return {
    type: UPDATE_FOREGROUND_COLOR_SATURATION,
    saturation
  };
}

export function setForegroundColorIsSaturationFocused() {
  return {
    type: SET_FOREGROUND_COLOR_IS_SATURATION_FOCUSED
  };
}

export function updateForegroundColorLightness(lightness) {
  return {
    type: UPDATE_FOREGROUND_COLOR_LIGHTNESS,
    lightness
  };
}

export function setForegroundColorIsLightnessFocused() {
  return {
    type: SET_FOREGROUND_COLOR_IS_LIGHTNESS_FOCUSED
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
