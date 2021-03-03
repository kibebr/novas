import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render (): JSX.Element {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Vollkorn:wght@500;600&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Libre+Franklin&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600&display=swap" rel="stylesheet" />
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
