import { ConfigProvider, theme as antTheme } from 'antd'
import { useState, useEffect } from 'react'
import 'antd/dist/reset.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false)

  /**
   * resolve FUOC on first load
   * https://github.com/ant-design/ant-design/issues/16037#issuecomment-509024637
   *  */
  if (typeof window !== 'undefined') {
    window.onload = () => {
      document.getElementById('holderStyle').remove()
    }
  }

  return (
    <>
      <Head>
        <style
          id="holderStyle"
          dangerouslySetInnerHTML={{
            __html: `
      /* https://github.com/ant-design/ant-design/issues/16037#issuecomment-483140458 */
      /* Not only antd, but also any other style if you want to use ssr. */
      *, *::before, *::after {
        transition: none!important;
      }
    `,
          }}
        />
      </Head>
      <ConfigProvider
        theme={{
          algorithm: darkMode
            ? antTheme.darkAlgorithm
            : antTheme.defaultAlgorithm,
        }}
      >
        <Component
          {...pageProps}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </ConfigProvider>
    </>
  )
}
