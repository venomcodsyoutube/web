import React from 'react'
import { Flex, VStack, Heading, Spacer } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/button'
import { useColorMode } from '@chakra-ui/color-mode'
import styles from '../../styles/Home.module.css'
import { FaSun, FaMoon, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'

const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode();

    const isDark = colorMode === 'dark'
  return (
    <VStack p="5">
    <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">VenomCodes</Heading>
        <Spacer />
          <nav className={styles.nav}>
            <ul>
              <Link href="/" passHref><a><li>Home</li></a></Link>
              <Link href="/courses"passHref ><a><li>Courses</li></a></Link>
              <Link href="/contact" passHref><a><li>Contact</li></a></Link>
            </ul>
          </nav>
        <Spacer />
        <IconButton icon={<FaYoutube />} isRound="true" onClick={() => window.open("https://www.youtube.com/channel/UCcUWRsoM90_rnBALgMnPRrg")} />
        <IconButton icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode} ml="8" />
    </Flex>
    </VStack>
  )
}

export default Navbar