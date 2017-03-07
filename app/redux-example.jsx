var redux = require('redux');

console.log('Starting redux example');

var actions = require('app/actions/index');
var store = require('app/store/configureStore').configure();

// Subscribe to changes.
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('New state', store.getState());

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your Location</a>';
  }
});
//unsubscribe();

store.dispatch(actions.fetchLocation());

console.log('currentState', store.getState());

store.dispatch(actions.changeName('Mike'));
store.dispatch(actions.addHobby('Board Games'));
store.dispatch(actions.addHobby('Photography'));
store.dispatch(actions.removeHobby(2));
store.dispatch(actions.changeName('Emily'));
store.dispatch(actions.addMovie('Aliens', 'Sci-Fi'));
store.dispatch(actions.addMovie('Hot Fuzz', 'Comedy'));
store.dispatch(actions.removeMovie(1));
