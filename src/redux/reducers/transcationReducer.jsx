import { SET_CURRENT_TRANSCATION, TRANSCATION_LOADING } from '../actions/transcationTypes';
const initialState = {
  transcation: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_TRANSCATION:
      return {
        ...state,
        transcation: action.payload
      };
    case TRANSCATION_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
