import Head from 'next/head'
import { Inter } from '@next/font/google'
import {
  Card,
  Button,
  ConfigProvider,
  theme as antTheme,
  Typography,
} from 'antd'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ darkMode, setDarkMode }) {
  return (
    <>
      <Head>
        <title>Test ANTD in SSR</title>
      </Head>
      {/* <main className={styles.main}> */}
      <Card>
        <Button type="primary" onClick={() => setDarkMode(!darkMode)}>
          change mode
        </Button>
      </Card>
      {/* </main> */}
    </>
  )
}
