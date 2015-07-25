import colorUtils from 'utils/color';
import numberUtils from 'utils/number';
import { UPDATE_ACCESSIBILITY_LEVEL, UPDATE_BACKGROUND_COLOR,
         SWITCH_COLORS, UPDATE_FOREGROUND_COLOR, UPDATE_FONT_SIZE,
         TOGGLE_IS_FONT_BOLD } from 'flux/constants';

const initialState = {
  accessibilityLevel: 'AA',
  backgroundColor: {
    isValid: true,
    value: '#eeeeee'
  },
  foregroundColor: {
    isValid: true,
    value: '#767676'
  },
  fontSize: {
    isValid: true,
    value: '14'
  },
  isFontBold: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ACCESSIBILITY_LEVEL:
      return {
        ...state,
        accessibilityLevel: action.value
      };

    case UPDATE_BACKGROUND_COLOR:
      return {
        ...state,
        backgroundColor: {
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

    case UPDATE_FOREGROUND_COLOR:
      return {
        ...state,
        foregroundColor: {
          isValid: colorUtils.isValid(action.value),
          value: action.value
        }
      };

    case UPDATE_FONT_SIZE:
      return {
        ...state,
        fontSize: {
          isValid: numberUtils.isIntegerInRange(action.value, 8, 50),
          value: action.value
        }
      };

    case TOGGLE_IS_FONT_BOLD:
      return {
        ...state,
        isFontBold: !state.isFontBold
      };

    default:
      return state;
  }
}
