import Head from "next/head"
import "../styles/globals.css"
import "../styles/styles.css"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta property="og:url" content="https://www.wyldflwr.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Wyld Flwr" />
        <meta
          property="og:description"
          content="Wyld Flwr is a designer phygital (physical + digital) brand inspired by Trinidad and Tobago Carnival and Burning Man"
        />
        <meta
          property="og:image"
          content="https://images.pexels.com/photos/11596003/pexels-photo-11596003.png?cs=srgb&dl=pexels-jaedan-persaud-11596003.jpg&fm=jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="wyldflwr.com" />
        <meta property="twitter:url" content="https://www.wyldflwr.com/" />
        <meta name="twitter:title" content="Wyld Flwr" />
        <meta
          name="twitter:description"
          content="Wyld Flwr is a designer phygital (physical + digital) brand inspired by Trinidad and Tobago Carnival and Burning Man"
        />
        <meta
          name="twitter:image"
          content="https://images.pexels.com/photos/11596003/pexels-photo-11596003.png?cs=srgb&dl=pexels-jaedan-persaud-11596003.jpg&fm=jpg"
        />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
