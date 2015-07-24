import number from 'utils/number';
import color from 'utils/color';
import {
  UPDATE_DESIRED_CONTRAST_RATIO,
  UPDATE_CONSTANT_COLOR,
  UPDATE_COLOR_TO_ADJUST,
  SWITCH_COLOR_AND_BACKGROUND_COLOR
} from 'flux/constants';

const initialState = {
  desiredContrastRatio: {
    isValid: true,
    value: '4.5'
  },
  constantColor: {
    isValid: true,
    value: 'eeeeee'
  },
  colorToAdjust: {
    isValid: true,
    value: '767676'
  },
  isBackgroundColorConstant: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_DESIRED_CONTRAST_RATIO:
      return {
        ...state,
        desiredContrastRatio: {
          isValid: number.isFloat(action.value),
          value: action.value
        }
      };

    case UPDATE_CONSTANT_COLOR:
      return {
        ...state,
        constantColor: {
          isValid: color.isValid('#' + action.value),
          value: action.value
        }
      };

    case UPDATE_COLOR_TO_ADJUST:
      return {
        ...state,
        colorToAdjust: {
          isValid: color.isValid('#' + action.value),
          value: action.value
        }
      };

    case SWITCH_COLOR_AND_BACKGROUND_COLOR:
      return {
        ...state,
        isBackgroundColorConstant: !isBackgroundColorConstant
      };

    default:
      return state;
  }
}
