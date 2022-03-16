import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { VStack } from '@chakra-ui/react'
import Header from './components/Header'
import Rec from './components/RecCourses'

export default function Home() {
  return (
    <VStack>
    <Head><title>VenomCodes | Home</title></Head>
        <Header />
        <Rec />
    </VStack>
  )
}
