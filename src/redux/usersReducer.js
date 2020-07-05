const LOAD_USERS = 'users/LOAD_USERS';
const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';

const initialState = {
  users: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload.users]
      };

    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.payload.userId) {
            return {
              ...user,
              isFollowing: true
            };
          }
          return user;
        })
      };
    
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.payload.userId) {
            return {
              ...user,
              isFollowing: false
            };
          }
          return user;
        })
      };
  
    default:
      return state;
  }
};

export const loadUsersActionCreator = users => ({
  type: LOAD_USERS,
  payload: {
    users
  }
});

export const followActionCreator = userId => ({
  type: FOLLOW,
  payload: { userId }
});

export const unfollowActionCreator = userId => ({
  type: UNFOLLOW,
  payload: { userId }
});

export default usersReducer;
