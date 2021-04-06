import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainLayout } from "../../../layout/MainLayout";
import { AppState } from "../../store/rootReducer";
import { BodyInput, Button, Form, Title, TitleInput } from "../../styles/createPageStyle";


export default function CreatePage() {
   const dispatch = useDispatch()
   const message = useSelector((state: AppState) => state.app.message)

   const [postForm, setPostForm] = useState({
      title: '', body: ''
   })

   const changeHandler = (e) => { setPostForm({ ...postForm, [e.target.name]: e.target.value }) }

   const createHandler = (e) => {
      e.preventDefault()
      console.log(postForm);
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
