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

var store = redux.createStore(reducer);

console.log('currentState', store.getState());

store.dispatch({
  type: CHANGE_SEARCH_TEXT,
  searchText: 'Any Search Text'
});

console.log('Search text should be "Any Search Text"', store.getState());
