import {
  UPDATE_DESIRED_CONTRAST_RATIO,
  UPDATE_BACKGROUND_COLOR,
  UPDATE_FOREGROUND_COLOR,
  SWITCH_COLORS
} from 'flux/constants';

export function updateDesiredContrastRatio(value) {
  return {
    type: UPDATE_DESIRED_CONTRAST_RATIO,
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
