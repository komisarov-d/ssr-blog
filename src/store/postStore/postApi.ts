import { IComment } from './../../types/Types';
import axios from "axios"
import { IPost } from "../../types/Types"

const baseUrl = 'https://simple-blog-api.crew.red/'

export const postApi = {
   createPost(post: IPost) {
      return axios.post(`${baseUrl}posts`, { ...post })
   },
   removePost(id: number) {
      return axios.delete(`${baseUrl}posts/${id}`)
   },
   updatePost(post: IPost) {
      return axios.put(`${baseUrl}posts/${post.id}`, { ...post })
   },
   addComment(comment: IComment) {
      return axios.post(`${baseUrl}comments`, { ...comment })
   }
}
