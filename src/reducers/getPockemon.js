const getPockemon = (state = {
  isLoading: false,
  pockemon: null
}, action) => {
  switch (action.type) {
    case 'REQUEST_POCK':
      return {
        ...state,
        isLoading: true
      };
    case 'RECEIVE_POCK':
      return {
        ...state,
        pockemon:action.json,
        isLoading: false
      };
    case 'GET_POCK_LS':
      return {
        ...state,
        pockemon: JSON.parse(localStorage.getItem(action.name))
      };
    default:
      return state
  }
};

export default getPockemon
