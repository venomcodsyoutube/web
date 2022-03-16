import '../styles/globals.css'
import Navbar from './components/Navbar'
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react'
// import Menu from './components/Menu'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode='light'></ColorModeScript>
      <Navbar />
      {/* <Menu /> */}
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
