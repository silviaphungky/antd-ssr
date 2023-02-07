import { ConfigProvider, theme as antTheme } from 'antd'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false)

  /**
   * resolve FUOC on first load
   * https://github.com/ant-design/ant-design/issues/16037#issuecomment-509024637
   *  */

  if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
      document.getElementById('holderStyle').remove()
    })
  }

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
