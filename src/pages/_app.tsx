import NextNProgress from 'nextjs-progressbar'
import { Provider } from 'react-redux'
import store from '../store/rootReducer'
import React from 'react'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const options = {
    color: "#292929",
    startPosition: 0.3,
    stopDelayMs: 200,
    height: 2
  }
  return (
    <>
      <NextNProgress
        {...options}
      />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <style jsx global>{`
      body {
          font-family: 'Roboto', sans-serif;
      }`}
      </style>
    </>)
}

export default MyApp
