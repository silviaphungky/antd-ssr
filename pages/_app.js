import { ConfigProvider, theme as antTheme } from 'antd'
import Head from 'next/head'
import { useState, useEffect } from 'react'
// import styles from '@/styles/Home.module.css'
import 'antd/dist/reset.css'

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false)

  /**
   * resolve FUOC on first load
   * https://github.com/ant-design/ant-design/issues/16037#issuecomment-509024637
   *  */
  // useEffect(() => {
  //   document.getElementById('preventFlashOfUnstyledContent')?.remove()
  // }, [])

  if (typeof window !== 'undefined') {
    window.onload = () => {
      document.getElementById('holderStyle').remove()
    }
  }
  console.log('ssr sisil')

  return (
    <>
      <Head>
        <style
          id="holderStyle"
          dangerouslySetInnerHTML={{
            __html: `
      *, *::before, *::after {
        transition: none !important;
      }`,
          }}
        />
      </Head>
      <Component {...pageProps} darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  )
}
