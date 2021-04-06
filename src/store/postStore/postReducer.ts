import { ActionsTypes } from './postsActions';

export const SET_POSTS = "SET_POSTS";
export const CREATE_POST = "CREATE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const ADD_COMMENT = "ADD_COMMENT";

const initialState = {
   posts: []
};

export const postReducer = (state = initialState, action: ActionsTypes) => {
   switch (action.type) {
      case SET_POSTS:
         return { ...state, posts: action.payload }
      case CREATE_POST:
         return { ...state, posts: [...state.posts, action.payload] }
      case REMOVE_POST:
         return { ...state, posts: state.posts.filter(post => post._id !== action.payload) }
      case UPDATE_POST:
         return { ...state, posts: state.posts.filter(post => post._id !== action.payload) }
      case ADD_COMMENT:
         return { ...state, posts: state.posts.filter(post => post._id !== action.payload) }
      default:
         return { ...state, }
   }
}

