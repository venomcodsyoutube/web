import { Flex, VStack, Stack, Heading, Spacer, Box, Text, Input, Textarea } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import React from 'react'
import emailjs from "emailjs-com"
import styles from '../styles/Home.module.css';
import Success from './components/Success'
import Head from 'next/head'
import { Button } from '@chakra-ui/button'

const contact = () => {
  const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_e2dajuo', 'template_33ycncq', e.target, 'rEAdyNUwtD3tW3eow')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
      return (
          <Success />
          )
    }

    return (
        <VStack>
            <Head><title>VenomCodes | Contact</title></Head>
            <Flex m="8rem" p="8" className={styles.grid}>
                <Box className={styles.coninfo} textAlign="center" pr="4rem">
                    <Heading>Contact Me</Heading>
                    <Text mt="2rem">Any questions or suggestions...<br />
                        Feel free to ask or suggest anything this that you like by filling this form.<br />
                        I will try hard to respond to all the queries.<br />
                        So keep dropping your opinions.</Text>
                </Box>

                <Box mt="-4rem">
                    <form 
                        method="post" onSubmit={sendEmail} className={styles.form}>
                        <FormControl isRequired >
                            <FormLabel htmlFor='name'>Name</FormLabel>
                            <Input name="name" id='name' placeholder='Name' />
                        </FormControl>
                        <FormControl isRequired mt="4">
                            <FormLabel htmlFor='email'>Email</FormLabel>
                            <Input name="email" id='email' placeholder='Email' />
                        </FormControl>
                        <FormControl isRequired mt="4">
                            <FormLabel htmlFor='Message'>Your Message</FormLabel>
                            <Textarea h="10rem" name="message" id='message' placeholder='Your Message' />
                        </FormControl>
                        <button className={styles.subBtn} mt="1rem" type="submit">Submit</button>
                    </form>
                </Box>
            </Flex>

        </VStack>
    )
}

export default contact
