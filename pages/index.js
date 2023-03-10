import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Card, Button, theme as antTheme } from 'antd'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ darkMode, setDarkMode }) {
  return (
    <>
      <Head>
        <title>Test ANTD in SSR</title>
        <meta name="description" content="Test ANTD in SSR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Card>
        <Button type="primary" onClick={() => setDarkMode(!darkMode)}>
          {`change mode ${darkMode ? 'light' : 'dark'}`}
        </Button>
      </Card>
    </>
  )
}
