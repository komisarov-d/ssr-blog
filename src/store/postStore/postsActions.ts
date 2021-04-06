import { IComment } from './../../types/Types';
import { postApi } from './postApi';
import { CREATE_POST, SET_POSTS, REMOVE_POST, UPDATE_POST, ADD_COMMENT } from './postReducer';
import { IPost } from "../../types/Types"
import { InferActionsType } from '../rootReducer';

export const actions = {
   setPosts: (payload: IPost[]) => ({ type: SET_POSTS, payload } as const),
   createPost: (payload: IPost) => ({ type: CREATE_POST, payload } as const),
   updatePost: (payload: IPost) => ({ type: REMOVE_POST, payload } as const),
   removePost: (payload: number) => ({ type: UPDATE_POST, payload } as const),
   addComment: (payload: IComment) => ({ type: ADD_COMMENT, payload } as const)
}

const createPostThunk = (post: IPost) => async (dispatch) => {
   try {
      await postApi.createPost(post)
      dispatch(actions.createPost(post))
   } catch (error) {

   }
}
const updatePostThunk = (post: IPost) => async (dispatch) => {
   try {
      await postApi.updatePost(post)
      dispatch(actions.updatePost(post))
   } catch (error) {

   }
}
const removePostThunk = (id: number) => async (dispatch) => {
   try {
      await postApi.removePost(id)
      dispatch(actions.removePost(id))
   } catch (error) {

   }
}
const addCommentThunk = (comment: IComment) => async (dispatch) => {
   try {
      await postApi.addComment(comment)
      dispatch(actions.addComment(comment))
   } catch (error) {

   }
}

export type ActionsTypes = InferActionsType<typeof actions>