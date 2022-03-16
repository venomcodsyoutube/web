import React from 'react'
import { Circle, Stack, Flex, Box, Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image'
import { useMediaQuery } from '@chakra-ui/media-query'
import Link from'next/link'
import styles from '../../styles/Home.module.css'

const Header = () => {

    const { colorMode } = useColorMode()

    const isDark = colorMode === 'dark'

    const [isNotSmallerScreen] = useMediaQuery("(min-width:700px)")

    return (
        <Stack className={styles.box}>
            {isNotSmallerScreen && (
            <Circle
                position="absolute"
                bg="blue.100"
                opacity="0.2"
                w="300px"
                h="300px"
                alignSelf="flex-end"
            />
            )}
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px"
                p={isNotSmallerScreen ? "32" : 0}
                alignSelf="flex-start"
            >
                <Box mt={isNotSmallerScreen ?0:16 } alignSelf="flex-start">
                    <Text fontSize="5xl" fontWeight="semibold">Welcome to</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">VenomCodes</Text>
                    <Text color={isDark?"grey.200" : "grey.500"}>Want to create exciting and entertaining projects with coding<br /> for free?
                        Or are you interested in learning a new programming language?<br />
                        If that&apos;s the case, I&apos;ve got you covered!!!</Text>
                    <Link href="/courses" passHref><Button mt={8} colorScheme="blue">Free Courses</Button></Link>
                </Box>
                <Image 
                    alt="image"
                    mt={isNotSmallerScreen?"0":"12"}
                    mb={isNotSmallerScreen?"0":"12"}
                    alignSelf="center"
                    borderRadius="full"
                    backgroundColor="transparent"
                    boxShadow="lg"
                    boxSize="300px"
                    src="https://venomcodes.netlify.app/CHANNEL%20LOGO.png"
                />
            </Flex>
        </Stack>
    )
}

export default Header