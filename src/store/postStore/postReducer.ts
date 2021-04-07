import { IPost } from '../../types/Types';
import { ActionsTypes } from './postsActions';

export const SET_POSTS = "SET_POSTS";
export const CREATE_POST = "CREATE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const UPDATE_POST = "UPDATE_POST";


const initialState = {
   posts: [] as IPost[]
};

export const postReducer = (state = initialState, action: ActionsTypes) => {
   switch (action.type) {
      case SET_POSTS:
         return { ...state, posts: action.payload }
      case CREATE_POST:
         return { ...state, posts: [action.payload, ...state.posts] }
      case REMOVE_POST:
         return { ...state, posts: state.posts.filter((post) => post.id !== action.payload) }
      default:
         return { ...state, }
   }
}

