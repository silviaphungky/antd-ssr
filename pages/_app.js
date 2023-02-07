import { ConfigProvider, theme as antTheme } from 'antd'
import { useState, useEffect, useRef } from 'react'
import 'antd/dist/reset.css'
import Head from 'next/head'

const PreventFlashOfUnstyledContent = ({ isMounted }) => {
  if (isMounted.current) return null

  return (
    <Head>
      <style
        id="preventFlashOfUnstyledContent"
        dangerouslySetInnerHTML={{
          __html: `*, *::before, *::after { transition: none !important; }`,
        }}
      />
    </Head>
  )
}

export default function App({ Component, pageProps }) {
  const isMounted = useRef(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    isMounted.current = true
  }, [])

  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: darkMode
            ? antTheme.darkAlgorithm
            : antTheme.defaultAlgorithm,
        }}
      >
        {/* 
        /** * resolve FUOC on first load *
        https://github.com/ant-design/ant-design/issues/16037#issuecomment-509024637
        * 
        */}
        <PreventFlashOfUnstyledContent isMounted={isMounted} />
        <Component
          {...pageProps}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </ConfigProvider>
    </>
  )
}
