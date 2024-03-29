import { useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import( 'bootstrap/dist/css/bootstrap.min.css')
    import('bootstrap/dist/js/bootstrap.bundle')
  },[])
  return <Component {...pageProps} />
}

export default MyApp
