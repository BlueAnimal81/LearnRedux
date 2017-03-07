import * as types from 'app/actions/types';

export var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case types.CHANGE_NAME:
      return action.name
    default:
      return state;
  }
}

var nextHobbyId = 1;
export var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_HOBBY:
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ]
    case types.REMOVE_HOBBY:
      return state.filter(hobby => hobby.id !== action.id);
    default:
      return state;
  }
}

var nextMovieId = 1;
export var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_MOVIE:
      return [
        ...state,
        {
          id: nextMovieId++,
          title: action.title,
          genre: action.genre
        }
      ]
    case types.REMOVE_MOVIE:
      return state.filter(movie => movie.id !== action.id);
    default:
      return state;
  }
}

export var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
  switch (action.type) {
    case types.START_LOCATION_FETCH:
      return {
        isFetching: true,
        url: undefined
      }
    case types.COMPLETE_LOCATION_FETCH:
      return {
        isFetching: false,
        url: action.url
      }
    default:
      return state;
  }
}
