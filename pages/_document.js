import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
