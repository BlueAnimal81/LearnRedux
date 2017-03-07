var redux = require('redux');

console.log('Starting redux todo example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos:[]
};

const CHANGE_SEARCH_TEXT = 'CHANGE_SEARCH_TEXT';

var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
}

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes.
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('Name is', state.searchText);
  document.getElementById('app').innerHTML = state.searchText;
})
//unsubscribe();

console.log('currentState', store.getState());

store.dispatch({
  type: CHANGE_SEARCH_TEXT,
  searchText: 'Clean Car'
});

store.dispatch({
  type: CHANGE_SEARCH_TEXT,
  searchText: 'Wash Dishes'
})

store.dispatch({
  type: CHANGE_SEARCH_TEXT,
  searchText: 'Paint Living Room'
})
