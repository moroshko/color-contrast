import colorUtils from 'utils/color';
import {
  UPDATE_COLOR_VALUE,
  UPDATE_COLOR_HUE,
  UPDATE_COLOR_SATURATION,
  UPDATE_COLOR_LIGHTNESS
} from 'flux/constants/actionTypes/color';

export default function(state, action) {
  switch (action.type) {
    case UPDATE_COLOR_VALUE:
      const isValid = colorUtils.isValid(action.value);
      let { hue, saturation, lightness } = state;

      if (isValid) {
        const hsl = colorUtils.str2hsl(action.value);

        hue = hsl.h;
        saturation = hsl.s;
        lightness = hsl.l;
      }

      return {
        isValid,
        value: action.value,
        hue,
        saturation,
        lightness
      };

    case UPDATE_COLOR_HUE:
      return state;

    case UPDATE_COLOR_SATURATION:
      return state;

    case UPDATE_COLOR_LIGHTNESS:
      return state;

    default:
      return state;
  }
}
