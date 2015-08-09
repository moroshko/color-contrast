import {
  UPDATE_ACCESSIBILITY_LEVEL,
  UPDATE_BACKGROUND_COLOR,
  UPDATE_TEXT_COLOR,
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

export function updateBackgroundColor(field, value) {
  return {
    type: UPDATE_BACKGROUND_COLOR,
    field,
    value
  };
}

export function updateTextColor(field, value) {
  return {
    type: UPDATE_TEXT_COLOR,
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
