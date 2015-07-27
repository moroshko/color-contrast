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

  function updateHSLifValueValid() {
    if (isValueValid) {
      const { h, s, l } = colorUtils.str2hsl(value);

      isHueValid = true;
      hue = h.toString();
      isSaturationValid = true;
      saturation = s.toString();
      isLightnessValid = true;
      lightness = l.toString();
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
  }

  function updateValueIfHSLvalid() {
    if (isHueValid && isSaturationValid && isLightnessValid) {
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
  }

  switch (action.type) {
    case UPDATE_COLOR_VALUE:
      value = action.value;
      isValueValid = colorUtils.isValueValid(value);

      return updateHSLifValueValid();

    case UPDATE_COLOR_HUE:
      hue = action.hue;
      isHueValid = colorUtils.isHueValid(hue);

      return updateValueIfHSLvalid();

    case UPDATE_COLOR_SATURATION:
      saturation = action.saturation;
      isSaturationValid = colorUtils.isSaturationValid(saturation);

      return updateValueIfHSLvalid();

    case UPDATE_COLOR_LIGHTNESS:
      lightness = action.lightness;
      isLightnessValid = colorUtils.isLightnessValid(lightness);

      return updateValueIfHSLvalid();

    default:
      return state;
  }
}
