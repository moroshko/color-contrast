import {
  UPDATE_DESIRED_CONTRAST_RATIO,
  UPDATE_CONSTANT_COLOR,
  UPDATE_COLOR_TO_ADJUST
} from 'flux/constants';

const initialState = {
  desiredContrastRatio: '4.5',
  constantColor: 'eeeeee',
  colorToAdjust: '767676'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_DESIRED_CONTRAST_RATIO:
      return {
        ...state,
        desiredContrastRatio: action.value
      };

    case UPDATE_CONSTANT_COLOR:
      return {
        ...state,
        constantColor: action.value
      };

    case UPDATE_COLOR_TO_ADJUST:
      return {
        ...state,
        colorToAdjust: action.value
      };

    default:
      return state;
  }
}
