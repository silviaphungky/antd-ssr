import { ConfigProvider, theme as antTheme } from 'antd'
import { useState, useEffect, useRef } from 'react'
import 'antd/dist/reset.css'
import Head from 'next/head'

function useIsMounted() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}

function PreventFlashOfUnstyledContent() {
  const mounted = useIsMounted()

  if (mounted) {
    return null
  }

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
  const [darkMode, setDarkMode] = useState(false)

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
        <PreventFlashOfUnstyledContent />
        <Component
          {...pageProps}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </ConfigProvider>
    </>
  )
}
