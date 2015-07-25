import { UPDATE_ACCESSIBILITY_LEVEL, UPDATE_BACKGROUND_COLOR,
         UPDATE_FOREGROUND_COLOR, SWITCH_COLORS } from 'flux/constants';

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
