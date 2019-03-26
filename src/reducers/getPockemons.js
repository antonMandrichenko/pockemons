const getPockemons = (state = {
  isLoading: false,
  pockemons: {
    results:[]
  },
  isFetched: false
}, action) => {
  switch (action.type) {
    case 'REQUEST_POSTS':
      return {
        ...state,
        isLoading: true
      };
    case 'RECEIVE_POSTS':
      return {
        ...state,
        pockemons:action.json,
        isLoading: false,
        isFetched: true
      };
    default:
      return state
    }
  };

export default getPockemons
