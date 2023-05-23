import '../styles/global.css';

//for icons from fontawesome, apparently
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App({ Component, pageProps}) {
  return <Component {...pageProps} />
}
