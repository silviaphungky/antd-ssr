import '@/styles/globals.css'
import {
  Card,
  Button,
  ConfigProvider,
  theme as antTheme,
  Typography,
} from 'antd'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode
          ? antTheme.darkAlgorithm
          : antTheme.defaultAlgorithm,
      }}
    >
      <Component {...pageProps} darkMode={darkMode} setDarkMode={setDarkMode} />
    </ConfigProvider>
  )
}
