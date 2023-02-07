import { ConfigProvider, theme as antTheme } from 'antd'
import { useState, useEffect, useRef } from 'react'
import 'antd/dist/reset.css'
import Head from 'next/head'
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'

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
        <Component
          {...pageProps}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </ConfigProvider>
    </>
  )
}
