import colorUtils from 'utils/color';
import numberUtils from 'utils/number';
import {
  UPDATE_ACCESSIBILITY_LEVEL,
  UPDATE_BACKGROUND_COLOR_VALUE,
  UPDATE_BACKGROUND_COLOR_HUE,
  UPDATE_BACKGROUND_COLOR_SATURATION,
  UPDATE_BACKGROUND_COLOR_LIGHTNESS,
  SWITCH_COLORS,
  UPDATE_FOREGROUND_COLOR_VALUE,
  UPDATE_FOREGROUND_COLOR_HUE,
  UPDATE_FOREGROUND_COLOR_SATURATION,
  UPDATE_FOREGROUND_COLOR_LIGHTNESS,
  UPDATE_FONT_SIZE,
  TOGGLE_IS_FONT_BOLD
} from 'flux/constants/actionTypes/app';
import {
  UPDATE_COLOR_VALUE,
  UPDATE_COLOR_HUE,
  UPDATE_COLOR_SATURATION,
  UPDATE_COLOR_LIGHTNESS
} from 'flux/constants/actionTypes/color';
import colorReducer from 'flux/reducers/color';

const initialBackgroundColor = '#eeeeee';
const initialForegroundColor = '#767676';
const initialBackgroundColorHSL = colorUtils.str2hsl(initialBackgroundColor);
const initialForegroundColorHSL = colorUtils.str2hsl(initialForegroundColor);
const initialState = {
  accessibilityLevel: 'AA',
  backgroundColor: {
    isValid: true,
    value: initialBackgroundColor,
    hue: initialBackgroundColorHSL.h,
    saturation: initialBackgroundColorHSL.s,
    lightness: initialBackgroundColorHSL.l
  },
  foregroundColor: {
    isValid: true,
    value: initialForegroundColor,
    hue: initialForegroundColorHSL.h,
    saturation: initialForegroundColorHSL.s,
    lightness: initialForegroundColorHSL.l
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

    case UPDATE_BACKGROUND_COLOR_VALUE:
      return {
        ...state,
        backgroundColor: colorReducer(state.backgroundColor, {
          type: UPDATE_COLOR_VALUE,
          value: action.value
        })
      };

    case UPDATE_BACKGROUND_COLOR_HUE:
      return {
        ...state,
        backgroundColor: colorReducer(state.backgroundColor, {
          type: UPDATE_COLOR_HUE,
          value: action.value
        })
      };

    case UPDATE_BACKGROUND_COLOR_SATURATION:
      return {
        ...state,
        backgroundColor: colorReducer(state.backgroundColor, {
          type: UPDATE_COLOR_SATURATION,
          value: action.value
        })
      };

    case UPDATE_BACKGROUND_COLOR_LIGHTNESS:
      return {
        ...state,
        backgroundColor: colorReducer(state.backgroundColor, {
          type: UPDATE_COLOR_LIGHTNESS,
          value: action.value
        })
      };

    case SWITCH_COLORS:
      return {
        ...state,
        backgroundColor: {...state.foregroundColor},
        foregroundColor: {...state.backgroundColor}
      };

    case UPDATE_FOREGROUND_COLOR_VALUE:
      return {
        ...state,
        foregroundColor: colorReducer(state.foregroundColor, {
          type: UPDATE_COLOR_VALUE,
          value: action.value
        })
      };

    case UPDATE_FOREGROUND_COLOR_HUE:
      return {
        ...state,
        foregroundColor: colorReducer(state.foregroundColor, {
          type: UPDATE_COLOR_HUE,
          value: action.value
        })
      };

    case UPDATE_FOREGROUND_COLOR_SATURATION:
      return {
        ...state,
        foregroundColor: colorReducer(state.foregroundColor, {
          type: UPDATE_COLOR_SATURATION,
          value: action.value
        })
      };

    case UPDATE_FOREGROUND_COLOR_LIGHTNESS:
      return {
        ...state,
        foregroundColor: colorReducer(state.foregroundColor, {
          type: UPDATE_COLOR_LIGHTNESS,
          value: action.value
        })
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
