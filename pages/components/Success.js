import React from 'react';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'
import {Stack, Image} from '@chakra-ui/react'
import styles from '../../styles/Home.module.css'

const Success = () => {
    return (
        <Stack alignItems="center">
            <Alert
                status='success'
                variant='subtle'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
                height='200px'
                width='600px'
                border='1px solid green'
                borderRadius="0.5rem"
            >
                <AlertIcon boxSize='40px' mr={0} />
                <AlertTitle mt={4} mb={1} fontSize='lg'>
                    Message Sent!
                </AlertTitle>
                <AlertDescription maxWidth='sm'>
                    Thanks for submitting your message. Our team will get back to you soon.
                </AlertDescription>
            </Alert>
            <Image  alt="image" src="https://cdn.dribbble.com/users/26878/screenshots/3643582/19-sendbutton.gif"  className={styles.sucImg} />
        </Stack>
    )
}

export default Success