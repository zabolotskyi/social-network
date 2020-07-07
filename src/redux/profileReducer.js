const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const ADD_POST = 'profile/ADD_POST';
const ADD_TEMP_POST = 'profile/ADD_TEMP_POST';
const SET_IS_FETCHING = 'profile/SET_IS_FETCHING';

const initialState = {
  userProfile: null,
  posts: [
    { id: 1, message: "First comment", likes: 10 },
    { id: 2, message: "Stop spamming!", likes: 23 }
  ],
  tempPost: '',
  isFetching: false
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload.userProfile
      };

    case ADD_POST:
      const newPost = { id: 3, message: state.tempPost, likes: 1 };
      
      return {
        ...state,
        posts: [...state.posts, newPost],
        tempPost: ''
      };

    case ADD_TEMP_POST:
      return {
        ...state,
        tempPost: action.payload.tempText
      };
    
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload.isFetching
      };
  
    default:
      return state;
  }
};

export const setUserProfile = userProfile => ({
  type: SET_USER_PROFILE,
  payload: { userProfile }
});

export const addPost = () => ({
  type: ADD_POST
});

export const addTempPost = tempText => ({
  type: ADD_TEMP_POST,
  payload: { tempText }
});

export const setIsFetching = isFetching => ({
  type: SET_IS_FETCHING,
  payload: { isFetching }
});

export default profileReducer;
