import axios from "axios";
import { NextPageContext } from "next"
import { useDispatch, useSelector } from "react-redux";
import { MainLayout } from "../../../layout/MainLayout";
import {  addCommentThunk, removePostThunk } from "../../store/postStore/postsActions";
import { AppState } from "../../store/rootReducer";
import { IPost } from "../../types/Types";
import { PostButton, CommentsList, PostTitle, Comment, PostBody, CommentsInput, PostHead, CommentButton, CommentsForm, NoComment } from '../../styles/PostPageStyle'
import React, { useState } from "react";
import { useRouter } from "next/router";
import { showMessage } from "../../store/appReducer/appReducer";
interface PostProps {
   post: IPost
}

export default function Post({ post }: PostProps) {
   const router = useRouter()
   const dispatch = useDispatch()
   const message = useSelector((state: AppState) => state.app.message)
     
   const [commentInput, setInput] = useState('')

     
   const deletePostHandler = () => {
      dispatch(removePostThunk(post.id))
      router.push('/')
   }

   const addCommentHandler = (e) => {
      e.preventDefault()

      if (commentInput === '') return dispatch(showMessage('Comment field are empty!'))
      
      const comment = {
         postId: post.id,
         body: commentInput
      }
      dispatch(addCommentThunk({ ...comment }))
      setInput('')
   }
  
   const comments = post.comments.map(comment => {
      return (<Comment key={comment.id}>&#9733; {comment.body}</Comment>)
   })
   
   return (
      <MainLayout message={message} title={'Post'}>
         <PostHead>
            <PostTitle>{post.title}</PostTitle>
            <PostButton onClick={deletePostHandler}>Delete post</PostButton>
         </PostHead>

         <PostBody>{post.body}</PostBody>

         <CommentsForm onSubmit={addCommentHandler}>

            <CommentsInput
               value={commentInput}
               onChange={(e) => setInput(e.target.value)}
               type="text" />

            <CommentButton>Send comment</CommentButton>

         </CommentsForm>

         <PostTitle>Comments</PostTitle>

         {!post.comments ?? <NoComment>No comments yet</NoComment>}

         <CommentsList>
             {comments}
         </CommentsList>

      </MainLayout>
   )
}

interface PostNextPageContext extends NextPageContext {
   query: {
      postId: string
   }
}

Post.getInitialProps = async ({ query }: PostNextPageContext) => {
   const response = await axios.get<IPost>(`https://simple-blog-api.crew.red/posts/${query.postId}?_embed=comments`)
     
   return {
      post: response.data
   }
}