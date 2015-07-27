import colorUtils from 'utils/color';
import {
  UPDATE_COLOR_VALUE,
  UPDATE_COLOR_HUE,
  UPDATE_COLOR_SATURATION,
  UPDATE_COLOR_LIGHTNESS
} from 'flux/constants/actionTypes/color';

export default function(state, action) {
  let { value, isValueValid,
        hue, isHueValid,
        saturation, isSaturationValid,
        lightness, isLightnessValid } = state;

  switch (action.type) {
    case UPDATE_COLOR_VALUE:
      value = action.value;
      isValueValid = colorUtils.isValueValid(value);

      if (isValueValid) {
        const hsl = colorUtils.str2hsl(value);

        isHueValid = true;
        hue = hsl.h.toString();
        isSaturationValid = true;
        saturation = hsl.s.toString();
        isLightnessValid = true;
        lightness = hsl.l.toString();
      }

      return {
        isValueValid,
        value,
        isHueValid,
        hue,
        isSaturationValid,
        saturation,
        isLightnessValid,
        lightness
      };

    case UPDATE_COLOR_HUE:
      hue = action.hue;
      isHueValid = colorUtils.isHueValid(hue);

      if (isHueValid && state.isSaturationValid && state.isLightnessValid) {
        isValueValid = true;
        value = colorUtils.hsl2str({
          h: parseFloat(hue),
          s: parseFloat(saturation),
          l: parseFloat(lightness)
        });
      }

      return {
        isValueValid,
        value,
        isHueValid,
        hue,
        isSaturationValid,
        saturation,
        isLightnessValid,
        lightness
      };

    case UPDATE_COLOR_SATURATION:
      return state;

    case UPDATE_COLOR_LIGHTNESS:
      return state;

    default:
      return state;
  }
}
