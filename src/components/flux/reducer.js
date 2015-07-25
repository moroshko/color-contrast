import number from 'utils/number';
import colorUtils from 'utils/color';
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
    value: '#eeeeee'
  },
  foregroundColor: {
    isValid: true,
    value: '#767676'
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_DESIRED_CONTRAST_RATIO:
      let isValid = number.isFloat(action.value);

      if (isValid) {
        const float = parseFloat(action.value);

        if (float < 1 || float > 21) {
          isValid = false;
        }
      }

      return {
        ...state,
        desiredContrastRatio: {
          isValid,
          value: action.value
        }
      };

    case UPDATE_BACKGROUND_COLOR:
      return {
        ...state,
        backgroundColor: {
          isValid: colorUtils.isValid(action.value),
          value: action.value
        }
      };

    case UPDATE_FOREGROUND_COLOR:
      return {
        ...state,
        foregroundColor: {
          isValid: colorUtils.isValid(action.value),
          value: action.value
        }
      };

    case SWITCH_COLORS:
      return {
        ...state,
        backgroundColor: {...state.foregroundColor},
        foregroundColor: {...state.backgroundColor}
      };

    default:
      return state;
  }
}
