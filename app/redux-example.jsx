var redux = require('redux');

console.log('Starting redux example');

const CHANGE_NAME = 'CHANGE_NAME';

var reducer = (state = {name: 'Anonymous'}, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.name
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
});
//unsubscribe();

console.log('currentState', store.getState());

store.dispatch({
  type: CHANGE_NAME,
  name: 'Mike'
});

store.dispatch({
  type: CHANGE_NAME,
  name: 'Fred'
});
