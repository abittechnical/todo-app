import type { AppProps } from 'next/app'
import '@/styles/global.css'
import '@fontsource/josefin-sans/variable.css'

const NextApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default NextApp
