import axios from "axios";
import { NextPageContext } from "next"
import { useSelector } from "react-redux";
import { MainLayout } from "../../../layout/MainLayout";
import { AppState } from "../../store/rootReducer";
import { IPost } from "../../types/Types";

interface PostProps {
   post: IPost
}

export default function Post({ post }: PostProps) {

   const message = useSelector((state: AppState) => state.app.message)

   return (
      <MainLayout message={message} title={'Post'}>
         Post {post.body}
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