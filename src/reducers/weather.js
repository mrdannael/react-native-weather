import * as types from '../actions/actionTypes';

const initialState = {
  weather: {}
};

export default function weather(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOAD_WEATHER:
      return {
        ...state,
        weather: action.weather
      };
    default:
      return state;
  }
}
