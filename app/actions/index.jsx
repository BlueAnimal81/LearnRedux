var axios = require('axios');
import * as types from 'app/actions/types';

export var changeName = (name) => {
  return {
    type: types.CHANGE_NAME,
    name
  }
}

export var addHobby = (hobby) => {
  return {
    type: types.ADD_HOBBY,
    hobby
  }
}

export var removeHobby = (id) => {
  return {
    type: types.REMOVE_HOBBY,
    id
  }
}

export var addMovie = (title, genre) => {
  return {
    type: types.ADD_MOVIE,
    title,
    genre
  }
}

export var removeMovie = (id) => {
  return {
    type: types.REMOVE_MOVIE,
    id
  }
}

export var startLocationFetch = () => {
  return {
    type: types.START_LOCATION_FETCH
  }
}

export var completeLocationFetch = (url) => {
  return {
    type: types.COMPLETE_LOCATION_FETCH,
    url
  }
}

export var fetchLocation = () => {
  return (dispatch, getState) => {
    dispatch(startLocationFetch());

    axios.get('http://ipinfo.io')
      .then((res) => {
        var loc = res.data.loc;
        var baseUrl = 'http://maps.google.com?q=';
        dispatch(completeLocationFetch(baseUrl + loc));
      });
  }
}
