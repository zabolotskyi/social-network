const ADD_POST = 'profile/ADD_POST';
const ADD_TEMP_POST = 'profile/ADD_TEMP_POST';

const initialState = {
  posts: [
    { id: 1, message: "First comment", likes: 10 },
    { id: 2, message: "Stop spamming!", likes: 23 }
  ],
  tempPost: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
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
  
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST
});

export const addTempPostActionCreator = tempText => ({
  type: ADD_TEMP_POST,
  payload: { tempText }
});

export default profileReducer;
