import {
  UPDATE_DESIRED_CONTRAST_RATIO,
  UPDATE_CONSTANT_COLOR,
  UPDATE_COLOR_TO_ADJUST,
  SWITCH_COLOR_AND_BACKGROUND_COLOR
} from 'flux/constants';

export function updateDesiredContrastRatio(value) {
  return {
    type: UPDATE_DESIRED_CONTRAST_RATIO,
    value
  };
}

export function updateConstantColor(value) {
  return {
    type: UPDATE_CONSTANT_COLOR,
    value
  };
}

export function updateColorToAdjust(value) {
  return {
    type: UPDATE_COLOR_TO_ADJUST,
    value
  };
}

export function switchColorAndBackgroundColor(value) {
  return {
    type: SWITCH_COLOR_AND_BACKGROUND_COLOR
  };
}
