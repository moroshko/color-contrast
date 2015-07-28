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

const initialBackgroundColor = '#696DF9';
const initialForegroundColor = '#F6F7AD';
const initialBackgroundColorHSL = colorUtils.str2hsl(initialBackgroundColor);
const initialForegroundColorHSL = colorUtils.str2hsl(initialForegroundColor);
const initialState = {
  accessibilityLevel: 'AA',
  backgroundColor: {
    isValueValid: true,
    value: initialBackgroundColor,
    isHueValid: true,
    hue: initialBackgroundColorHSL.h.toString(),
    isSaturationValid: true,
    saturation: initialBackgroundColorHSL.s.toString(),
    isLightnessValid: true,
    lightness: initialBackgroundColorHSL.l.toString()
  },
  foregroundColor: {
    isValueValid: true,
    value: initialForegroundColor,
    isHueValid: true,
    hue: initialForegroundColorHSL.h.toString(),
    isSaturationValid: true,
    saturation: initialForegroundColorHSL.s.toString(),
    isLightnessValid: true,
    lightness: initialForegroundColorHSL.l.toString()
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
          hue: action.hue
        })
      };

    case UPDATE_BACKGROUND_COLOR_SATURATION:
      return {
        ...state,
        backgroundColor: colorReducer(state.backgroundColor, {
          type: UPDATE_COLOR_SATURATION,
          saturation: action.saturation
        })
      };

    case UPDATE_BACKGROUND_COLOR_LIGHTNESS:
      return {
        ...state,
        backgroundColor: colorReducer(state.backgroundColor, {
          type: UPDATE_COLOR_LIGHTNESS,
          lightness: action.lightness
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
          hue: action.hue
        })
      };

    case UPDATE_FOREGROUND_COLOR_SATURATION:
      return {
        ...state,
        foregroundColor: colorReducer(state.foregroundColor, {
          type: UPDATE_COLOR_SATURATION,
          saturation: action.saturation
        })
      };

    case UPDATE_FOREGROUND_COLOR_LIGHTNESS:
      return {
        ...state,
        foregroundColor: colorReducer(state.foregroundColor, {
          type: UPDATE_COLOR_LIGHTNESS,
          lightness: action.lightness
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
