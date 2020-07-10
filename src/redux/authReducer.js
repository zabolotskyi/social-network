const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA';

const initialState = {
  id: null,
  login: null,
  email: null,
  isLoggedIn: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload.authUserData,
        isLoggedIn: true
      };
  
    default:
      return state;
  }
};

export const setAuthUserData = authUserData => ({
  type: SET_AUTH_USER_DATA,
  payload: { authUserData }
});

export default authReducer;
