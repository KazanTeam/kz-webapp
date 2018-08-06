const initialState = {
  isUserLoggedIn: false,
  username: '',
  user: undefined
};

export default {
  state: initialState,
  reducers: {
    set(state, payload) {
      return {
        ...state,
        ...payload
      }
    },
    isUserLoggedIn(state, payload) {
      return {
        ...state,
        isUserLoggedIn: payload
      }
    },
    setUsername(state, payload) {
      return {
        ...state,
        username: payload
      }
    },
    clear() {
      return initialState
    }
  },
  effects: {},
  selectors: {
    isUserLoggedIn: state => {
      return state.isUserLoggedIn
    },

    getUser: state => {
      return state.user
    },

    getUserAttributes: state => {
      let attributes = {};
      if(state.user) {
        Object.assign(attributes, state.user.attributes);
        attributes.username = state.user.username
      }
      return attributes
    }

  }
}
