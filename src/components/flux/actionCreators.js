import { UPDATE_ACCESSIBILITY_LEVEL, UPDATE_BACKGROUND_COLOR,
         SWITCH_COLORS, UPDATE_FOREGROUND_COLOR, UPDATE_FONT_SIZE,
         TOGGLE_IS_FONT_BOLD } from 'flux/constants';

export function updateAccessibilityLevel(value) {
  return {
    type: UPDATE_ACCESSIBILITY_LEVEL,
    value
  };
}

export function updateBackgroundColor(value) {
  return {
    type: UPDATE_BACKGROUND_COLOR,
    value
  };
}

export function updateForegroundColor(value) {
  return {
    type: UPDATE_FOREGROUND_COLOR,
    value
  };
}

export function switchColors(value) {
  return {
    type: SWITCH_COLORS
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
