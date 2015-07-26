import {
  UPDATE_ACCESSIBILITY_LEVEL,
  UPDATE_BACKGROUND_COLOR_VALUE,
  SWITCH_COLORS,
  UPDATE_FOREGROUND_COLOR_VALUE,
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
