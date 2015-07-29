import colorUtils from 'utils/color';
import numberUtils from 'utils/number';
import {
  UPDATE_ACCESSIBILITY_LEVEL,
  UPDATE_BACKGROUND_COLOR,
  SWITCH_COLORS,
  UPDATE_FOREGROUND_COLOR,
  UPDATE_FONT_SIZE,
  TOGGLE_IS_FONT_BOLD,
  UPDATE_FOCUSED_CHANNEL
} from 'flux/constants/actionTypes/app';
import { UPDATE_COLOR } from 'flux/constants/actionTypes/color';
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
  isFontBold: false,
  focusedChannel: null
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
        backgroundColor: colorReducer(state.backgroundColor, {
          type: UPDATE_COLOR,
          field: action.field,
          value: action.value
        })
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
        foregroundColor: colorReducer(state.foregroundColor, {
          type: UPDATE_COLOR,
          field: action.field,
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

    case UPDATE_FOCUSED_CHANNEL:
      return {
        ...state,
        focusedChannel: {
          isBackgroundColor: action.isBackgroundColor,
          colorChannel: action.colorChannel
        }
      };

    default:
      return state;
  }
}
