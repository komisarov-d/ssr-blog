import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
   render() {
      return (
         <Html>
            <Head>
               <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
               <link rel="icon" href="/favicon.ico" />
               <meta name="keywords" content="blog" />
               <meta name="description" content="blog" />
               <meta charSet="utf-8" />
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      )
   }
}