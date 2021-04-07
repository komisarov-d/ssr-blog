import React, { useState } from "react";
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from "react-redux";
import { MainLayout } from "../../../layout/MainLayout";
import { AppState } from "../../store/rootReducer";
import { BodyInput, Button, Form, Title, TitleInput } from "../../styles/createPageStyle";
import { showMessage } from "../../store/appReducer/appReducer";
import { createPostThunk } from "../../store/postStore/postsActions";


export default function CreatePage() {
   const dispatch = useDispatch()
   const router = useRouter()
   const message = useSelector((state: AppState) => state.app.message)

   const [postForm, setPostForm] = useState({
      title: '', body: ''
   })

   const changeHandler = (e) => { setPostForm({ ...postForm, [e.target.name]: e.target.value }) }

   const createHandler = (e) => {
      e.preventDefault()
      if (postForm.title === '' || postForm.body === '') return dispatch(showMessage('One or both fields are empty!'))
      dispatch(createPostThunk({ ...postForm }))
      router.push('/')
   }
   return (
      <MainLayout message={message} title={'Create post'}>

         <Title>Create new post</Title>

         <Form onSubmit={createHandler}>

            <TitleInput placeholder='New post title!' type="text" value={postForm.title} name='title' onChange={changeHandler} />

            <BodyInput placeholder='New post body!' type="text" value={postForm.body} name='body' onChange={changeHandler} />

            <Button>Create post</Button>
            
         </Form>

      </MainLayout>
   )
}
