import type { AppProps } from 'next/app'
import GlobalStyles from '../components/GlobalStyles'
import '../globals.css'

export default function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
