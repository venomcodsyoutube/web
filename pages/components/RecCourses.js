import React from 'react'
import { Stack, HStack, Flex, Box, Heading, Text, Badge } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const RecCourses = () => {
    return (
        <Stack>
            <Heading textAlign="center">Recommended Courses</Heading>
            <Flex>
                <Box mt={4}>
                    <div className={styles.card}>
                        <Image alt="image" src="https://i.ytimg.com/vi/UMwD7l0-BJk/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLCPtQIzjiCncBUAM6PDfkes2oy5vw"  borderTopRadius="10px"/>
                        <div className={styles.cardinfo}>
                            <Badge colorScheme="purple" ml='7rem' mr="7rem" mb="1rem">VenomCodes</Badge>
                            <Heading textAlign="center" size="md">Creating Jarvis from scratch!!</Heading>
                            <Text textAlign="center" mt={2}>In this course, we will create an AI assistant with the help of Python..</Text>
                            <Link href="./coursepages/create-jarvis-from-scratch"><Button colorScheme="purple" mt={4}>Start Watching</Button></Link>
                        </div>
                    </div>
                </Box>
            </Flex>
        </Stack>
    )
}

export default RecCourses
