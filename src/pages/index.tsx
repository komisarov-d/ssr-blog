import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MainLayout } from '../../layout/MainLayout';
import { actions } from '../store/postStore/postsActions';
import { AppState } from '../store/rootReducer';
import { Title } from '../styles/createPageStyle';
import { EmptyBlock } from '../styles/PostsPageStyle';
import { IPost } from '../types/Types';


interface IPostPageProps {
  initialPosts: IPost[]
}

export default function PostsPage({ initialPosts }: IPostPageProps) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.setPosts(initialPosts))
  }, [])
  const posts = useSelector((state: AppState) => state.posts.posts)
  const message = useSelector((state: AppState) => state.app.message)

  if (!posts.length) {
    return (
      <MainLayout>
        <EmptyBlock>No posts</EmptyBlock>
      </MainLayout>
    )
  }
  return (
    <MainLayout title={'Posts'} message={message}>

      <Title>Title</Title>

      <ul>
        {posts.map((post, idx) => {
          return <li key={post.id}>{post.title} {idx}</li>
        })}
      </ul>



    </MainLayout>
  )
}

PostsPage.getInitialProps = async () => {
  const response = await axios.get("https://simple-blog-api.crew.red/posts")
  return { initialPosts: response.data }
}