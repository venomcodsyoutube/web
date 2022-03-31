import '../styles/globals.css'
import Navbar from './components/Navbar'
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react'
import Menu from './components/menu'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
    <link href="https://yt3.ggpht.com/WW44k9Wpr5W8IzAKgiunKsp-Ue_tnhdIdOw3xnmiGoALEdrx9PXk_AdNznuGPjBIWF9hTvdm=s176-c-k-c0x00ffffff-no-rj" type="icon" />
    </Head>
      <ColorModeScript initialColorMode='light'></ColorModeScript>
      <Navbar />
       <Menu />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
