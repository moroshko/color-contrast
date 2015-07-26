import colorUtils from 'utils/color';
import { UPDATE_COLOR_VALUE } from 'flux/constants/actionTypes/color';

export default function(state, action) {
  switch (action.type) {
    case UPDATE_COLOR_VALUE:
      return {
        isValid: colorUtils.isValid(action.value),
        value: action.value
      };

    default:
      return state;
  }
}
