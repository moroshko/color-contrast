import colorUtils from 'utils/color/color';
import numberUtils from 'utils/number/number';
import {
  UPDATE_TEXT_COLOR,
  UPDATE_FONT_SIZE,
  TOGGLE_IS_FONT_BOLD,
  UPDATE_BACKGROUND_COLOR,
  UPDATE_ACCESSIBILITY_LEVEL
} from 'flux/constants/actionTypes/app';
import { UPDATE_COLOR } from 'flux/constants/actionTypes/color';
import colorReducer from 'flux/reducers/color';

const initialBackgroundColor = '#EEEEEE';
const initialTextColor = '#747474';
const initialBackgroundColorHSL = colorUtils.str2hsl(initialBackgroundColor);
const initialTextColorHSL = colorUtils.str2hsl(initialTextColor);
const initialState = {
  textColor: {
    isValueValid: true,
    value: initialTextColor,
    isHueValid: true,
    hue: initialTextColorHSL.h.toString(),
    isSaturationValid: true,
    saturation: initialTextColorHSL.s.toString(),
    isLightnessValid: true,
    lightness: initialTextColorHSL.l.toString()
  },
  fontSize: {
    isValid: true,
    value: '16'
  },
  isFontBold: false,
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
  accessibilityLevel: 'AA'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TEXT_COLOR:
      return {
        ...state,
        textColor: colorReducer(state.textColor, {
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

    case UPDATE_BACKGROUND_COLOR:
      return {
        ...state,
        backgroundColor: colorReducer(state.backgroundColor, {
          type: UPDATE_COLOR,
          field: action.field,
          value: action.value
        })
      };

    case UPDATE_ACCESSIBILITY_LEVEL:
      return {
        ...state,
        accessibilityLevel: action.value
      };

    default:
      return state;
  }
}
