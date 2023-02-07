import { ConfigProvider, theme as antTheme } from 'antd'
import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false)

  /**
   * resolve FUOC on first load
   * https://github.com/ant-design/ant-design/issues/16037#issuecomment-509024637
   *  */
  useEffect(() => {
    document.getElementById('preventFlashOfUnstyledContent')?.remove()
  }, [])

  return (
    <>
      <Head>
        <style
          id="preventFlashOfUnstyledContent"
          dangerouslySetInnerHTML={{
            __html: `*, *::before, *::after { transition: none !important; }`,
          }}
        />
      </Head>
      <Component {...pageProps} darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  )
}
