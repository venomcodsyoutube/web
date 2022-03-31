import '../styles/globals.css'
import Navbar from './components/Navbar'
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react'
import Menu from './components/menu'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
    <lnk rel="./components/CHANNEL LOGO.png" type="icon" />
    </Head>
      <ColorModeScript initialColorMode='light'></ColorModeScript>
      <Navbar />
       <Menu />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
