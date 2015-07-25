import colorUtils from 'utils/color';
import { UPDATE_ACCESSIBILITY_LEVEL, UPDATE_BACKGROUND_COLOR,
         UPDATE_FOREGROUND_COLOR, SWITCH_COLORS } from 'flux/constants';

const initialState = {
  accessibilityLevel: 'AA',
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
