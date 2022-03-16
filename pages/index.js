import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { VStack } from '@chakra-ui/react'
import Header from './components/Header'

export default function Home() {
  return (
    <VStack>
    <Head><title>VenomCodes | Home</title></Head>
        <Header />
    </VStack>
  )
}
