import '../styles/globals.css'
import {AnimatePresence} from 'framer-motion'

function MyApp({ Component, pageProps}) {
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
