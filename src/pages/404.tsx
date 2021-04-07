import Link from "next/link";
import { MainLayout } from "../../layout/MainLayout";
import { ErrorLink, ErrorTitle } from "../styles/errorPageStyle";
import React from 'react'
export default function ErrorPage() {


   return (
      <MainLayout title={'Page not found'}>
         <ErrorTitle>Page not found</ErrorTitle>
         <Link href={'/'}><ErrorLink>Back to all posts</ErrorLink></Link>
      </MainLayout>
   )
}