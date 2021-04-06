import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import { Header, LinkItem, Message } from './layoutItems'



export function MainLayout({ children, title = 'Posts', message = 'Message' }) {
   return (
      <React.Fragment>
         <Head>
            <title>{title} | Blog</title>
         </Head>
         <Header>
            <Link href={'/'}><LinkItem>Posts</LinkItem></Link>
            <Link href={'/posts/new'}><LinkItem>Create</LinkItem></Link>
         </Header>
         <main>
            {children}
         </main>
         {message && <Message>{message}</Message>}
      </React.Fragment>
   )
}