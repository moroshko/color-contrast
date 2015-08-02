import {
  UPDATE_ACCESSIBILITY_LEVEL,
  UPDATE_BACKGROUND_COLOR,
  SWITCH_COLORS,
  UPDATE_FOREGROUND_COLOR,
  UPDATE_FONT_SIZE,
  TOGGLE_IS_FONT_BOLD,
  UPDATE_FOCUSED_CHANNEL,
  UPDATE_HEADER_COLORS
} from 'flux/constants/actionTypes/app';

export function updateAccessibilityLevel(value) {
  return {
    type: UPDATE_ACCESSIBILITY_LEVEL,
    value
  };
}

export function updateBackgroundColor(field, value) {
  return {
    type: UPDATE_BACKGROUND_COLOR,
    field,
    value
  };
}

export function switchColors(value) {
  return {
    type: SWITCH_COLORS
  };
}

export function updateForegroundColor(field, value) {
  return {
    type: UPDATE_FOREGROUND_COLOR,
    field,
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

export function updateFocusedChannel(isBackgroundColor, colorChannel) {
  return {
    type: UPDATE_FOCUSED_CHANNEL,
    isBackgroundColor,
    colorChannel
  };
}

export function updateHeaderColors(backgroundColor, color) {
  return {
    type: UPDATE_HEADER_COLORS,
    backgroundColor,
    color
  };
}
