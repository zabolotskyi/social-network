const LOAD_USERS = 'users/LOAD_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_IS_FETCHING = 'users/SET_IS_FETCHING';

const initialState = {
  users: [],
  pageCount: 5,
  currentPage: 1,
  totalUsersCount: 0,
  isFetching: false
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        users: [...action.payload.users]
      };
    
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload.currentPage
      };
    
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.payload.totalUsersCount
      };

    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.payload.userId) {
            return {
              ...user,
              followed: true
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
              followed: false
            };
          }
          return user;
        })
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

export const loadUsers = users => ({
  type: LOAD_USERS,
  payload: { users }
});

export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  payload: { currentPage }
});

export const setTotalUsersCount = totalUsersCount => ({
  type: SET_TOTAL_USERS_COUNT,
  payload: { totalUsersCount }
})

export const follow = userId => ({
  type: FOLLOW,
  payload: { userId }
});

export const unfollow = userId => ({
  type: UNFOLLOW,
  payload: { userId }
});

export const setIsFetching = isFetching => ({
  type: SET_IS_FETCHING,
  payload: { isFetching }
});

export default usersReducer;
