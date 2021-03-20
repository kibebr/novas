import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })
      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render (): JSX.Element {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="//db.onlinewebfonts.com/c/afd4ddebaf5580b6e2268547a84e264d?family=Amerigo+BT" rel="stylesheet" type="text/css"/>
          <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500&display=swap" rel="stylesheet" />
          <title>Novas</title>
        </Head>
        <body className='bg-white leading-6 tracking-tight antialiased text-black'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
