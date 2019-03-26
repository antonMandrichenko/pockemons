export const REQUEST_POSTS = 'REQUEST_POSTS';
function requestPosts() {
  return {
    type: REQUEST_POSTS,
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
function receivePosts(json) {
  return {
    type: RECEIVE_POSTS,
    json
  }
}

export const REQUEST_POCK = 'REQUEST_POCK';
function requestPock() {
  return {
    type: REQUEST_POCK,
  }
}

export const RECEIVE_POCK = 'RECEIVE_POCK';
function receivePock(json) {
  return {
    type: RECEIVE_POCK,
    json
  }
}

export function fetchPockemons(url) {
  return function(dispatch) {
    dispatch(requestPosts());
    return fetch(url)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => {
        localStorage.setItem('Pockemons', JSON.stringify(json));
        return dispatch(receivePosts(json))
      })
  }
}

export function fetchPock(url) {
  return function(dispatch) {
    dispatch(requestPock());
    return fetch(url)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>{
        localStorage.setItem(json.name, JSON.stringify(json));
        return dispatch(receivePock(json));
      })
  }
}

export const GET_POCK_LS = 'GET_POCK_LS';
export function getPock(name) {
  return {
    type: GET_POCK_LS,
    name
  }
}
