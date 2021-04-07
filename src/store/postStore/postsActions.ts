import { IComment } from './../../types/Types';
import { postApi } from './postApi';
import { CREATE_POST, SET_POSTS, REMOVE_POST, UPDATE_POST } from './postReducer';
import { IPost } from "../../types/Types"
import { InferActionsType } from '../rootReducer';
import { showMessage } from '../appReducer/appReducer';

export const actions = {
   setPosts: (payload: IPost[]) => ({ type: SET_POSTS, payload } as const),
   createPost: (payload: IPost) => ({ type: CREATE_POST, payload } as const),
   updatePost: (payload: IPost) => ({ type: UPDATE_POST, payload } as const),
   removePost: (payload: number) => ({ type: REMOVE_POST, payload } as const),
}

export const createPostThunk = ({ ...postForm }: IPost) => async (dispatch) => {
   try {
      const response = await postApi.createPost(postForm)
      dispatch(actions.createPost(response.data))
   } catch (error) {
      dispatch(showMessage('Some error, try again.'))
   }
}

export const removePostThunk = (id: number) => async (dispatch) => {
   try {
      await postApi.removePost(id)
      dispatch(actions.removePost(id))
      dispatch(showMessage('Posts was removed.'))
   } catch (error) {
      dispatch(showMessage('Some error, try again.'))
   }
}

export const addCommentThunk = ({ ...comment }: IComment) => async (dispatch) => {
   try {
      await postApi.addComment(comment)
      dispatch(showMessage('Comment would be added after page reload.'))
   } catch (error) {
      dispatch(showMessage('Some error, try again.'))
   }
}

export type ActionsTypes = InferActionsType<typeof actions>