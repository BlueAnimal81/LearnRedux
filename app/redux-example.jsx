var redux = require('redux');

console.log('Starting redux example');

const CHANGE_NAME = 'CHANGE_NAME';
const ADD_HOBBY = 'ADD_HOBBY';
const REMOVE_HOBBY = 'REMOVE_HOBBY';
const ADD_MOVIE = 'ADD_MOVIE';
const REMOVE_MOVIE = 'REMOVE_MOVIE';

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};

var nextHobbyId = 1;
var nextMovieId = 1;

var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.name
      };
    case ADD_HOBBY:
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      };
    case REMOVE_HOBBY:
      return {
        ...state,
        hobbies: state.hobbies.filter(hobby => hobby.id !== action.id )
      }
    case ADD_MOVIE:
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: nextMovieId++,
            title: action.title,
            genre: action.genre
          }
        ]
      };
    case REMOVE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.id)
      };
    default:
      return state;
  }
};

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes.
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;

  console.log('New state', store.getState());
});
//unsubscribe();

console.log('currentState', store.getState());

store.dispatch({
  type: CHANGE_NAME,
  name: 'Mike'
});

store.dispatch({
  type: ADD_HOBBY,
  hobby: 'Board Games'
});

store.dispatch({
  type: ADD_HOBBY,
  hobby: 'Photography'
});

store.dispatch({
  type: REMOVE_HOBBY,
  id: 2
});

store.dispatch({
  type: CHANGE_NAME,
  name: 'Fred'
});

store.dispatch({
  type: ADD_MOVIE,
  title: 'Aliens',
  genre: 'Sci-Fi'
});

store.dispatch({
  type: ADD_MOVIE,
  title: 'Hot Fuzz',
  genre: 'Comedy'
});

store.dispatch({
  type: REMOVE_MOVIE,
  id: 1
})
