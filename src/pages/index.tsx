import axios from 'axios';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MainLayout } from '../../layout/MainLayout';
import { actions } from '../store/postStore/postsActions';
import { AppState } from '../store/rootReducer';
import { PostBody } from '../styles/PostPageStyle';
import { EmptyBlock, Post, PostList, PostsTitle, PageTitle, Line, PostLink } from '../styles/PostsPageStyle';
import { IPost } from '../types/Types';

interface IPostPageProps {
  initialPosts: IPost[]
}
export default function PostsPage({ initialPosts }: IPostPageProps) {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.setPosts(initialPosts.reverse()))
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

      <PageTitle>All posts</PageTitle>
      <Line />

      <PostList>
        {posts.map((post, idx) => {
          return (
            <Post key={idx}>
              <Link href={`/posts/${post.id}`}>

                <PostLink>
                  <PostsTitle>{post.title}</PostsTitle>
                  <PostBody>{post.body}</PostBody>
                </PostLink>
                
              </Link>
            </Post>
            )
        })}
      </PostList>

    </MainLayout>
  )
}

PostsPage.getInitialProps = async () => {
  const response = await axios.get("https://simple-blog-api.crew.red/posts")
  return { initialPosts: response.data }
}