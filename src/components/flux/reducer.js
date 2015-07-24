import number from 'utils/number';
import color from 'utils/color';
import {
  UPDATE_DESIRED_CONTRAST_RATIO,
  UPDATE_BACKGROUND_COLOR,
  UPDATE_FOREGROUND_COLOR,
  SWITCH_COLORS
} from 'flux/constants';

const initialState = {
  desiredContrastRatio: {
    isValid: true,
    value: '4.5'
  },
  backgroundColor: {
    isValid: true,
    value: 'eeeeee'
  },
  foregroundColor: {
    isValid: true,
    value: '767676'
  }
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

    case UPDATE_BACKGROUND_COLOR:
      return {
        ...state,
        backgroundColor: {
          isValid: color.isValid('#' + action.value),
          value: action.value
        }
      };

    case UPDATE_FOREGROUND_COLOR:
      return {
        ...state,
        foregroundColor: {
          isValid: color.isValid('#' + action.value),
          value: action.value
        }
      };

    case SWITCH_COLORS:
      return {
        ...state,
        backgroundColor: {...foregroundColor},
        foregroundColor: {...backgroundColor}
      };

    default:
      return state;
  }
}
