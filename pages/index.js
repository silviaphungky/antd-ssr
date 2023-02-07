import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Card, Button, theme as antTheme } from 'antd'
// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ darkMode, setDarkMode }) {
  return (
    <>
      <Head>
        <title>Test ANTD in SSR</title>
        <meta name="description" content="Test ANTD in SSR" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <style
          id="preventFlashOfUnstyledContent"
          dangerouslySetInnerHTML={{
            __html: `*, *::before, *::after { transition: none !important; }`,
          }}
        /> */}
        {/* {typeof window === 'undefined' && (
          <style
            id="holderStyle"
            dangerouslySetInnerHTML={{
              __html: `
         *, *::before, *::after {
           transition: none!important;
         }
         `,
            }}
          />
        )} */}
      </Head>
      <Card>
        <Button type="primary" onClick={() => setDarkMode(!darkMode)}>
          change modes v3
        </Button>
      </Card>
    </>
  )
}
