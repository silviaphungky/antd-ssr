import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
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
        <meta name="description" content="Test ANTD in SSR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Card>
          <Button type="primary" onClick={() => setDarkMode(!darkMode)}>
            change mode
          </Button>
        </Card>
      </main>
    </>
  )
}
