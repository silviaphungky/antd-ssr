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
        <link rel="icon" href="/favicon.ico" />
        <style
          id="holderStyle"
          dangerouslySetInnerHTML={{
            __html: `
      /* https://github.com/ant-design/ant-design/issues/16037#issuecomment-483140458 */
      /* Not only antd, but also any other style if you want to use ssr. */
      *, *::before, *::after {
        transition: none!important;
      }`,
          }}
        />
      </Head>
      <Card>
        <Button type="primary" onClick={() => setDarkMode(!darkMode)}>
          change mode
        </Button>
      </Card>
    </>
  )
}
