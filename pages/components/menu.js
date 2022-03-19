import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure, VStack } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { Show, Hide } from '@chakra-ui/react'

const Menu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <VStack className={styles.menubtn}>
            <Show breakpoint='(max-width: 520px)'>
                <Button onClick={onOpen} colorScheme="purple" mb="4">Menu</Button>
            </Show>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Navigation</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody className={styles.modal}>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/courses">Courses</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </VStack>
    )
}

export default Menu
