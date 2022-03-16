import React from 'react'
import { VStack, Flex, Box, Heading, Text, Badge } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

const courses = () => {
  return (
       <VStack>
        <Head><title>VenomCodes | Courses</title></Head>
    <Heading textAlign="center">Courses</Heading>
    <Flex>
        <Box mt={4}>
            <div className={styles.card}>
                <Image alt="image" src="https://i.ytimg.com/vi/UMwD7l0-BJk/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLCPtQIzjiCncBUAM6PDfkes2oy5vw"  borderTopRadius="10px"/>
                <div className={styles.cardinfo}>
                    <Badge colorScheme="purple" ml='7rem' mr="7rem" mb="1rem">VenomCodes</Badge>
                    <Heading textAlign="center" size="md">Creating Jarvis from scratch!!</Heading>
                    <Text textAlign="center" mt={2}>In this course, we will create an AI assistant with the help of Python..</Text>
                    <Link href="./courses/create-jarvis-from-scratch" passHref><Button colorScheme="purple" mt={4}>Start Watching</Button></Link>
                </div>
            </div>
        </Box>
    </Flex>
</VStack>
  )
}

export default courses
