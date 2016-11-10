import * as types from './actionTypes';

export function weatherLoaded(weather) {
  return {
    type: types.LOAD_WEATHER,
    weather
  };
}

export function loadWeather() {
  console.log('Load weather!');
}
