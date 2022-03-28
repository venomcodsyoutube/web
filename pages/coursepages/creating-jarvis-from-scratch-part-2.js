import React from 'react';
import { VStack, Flex, Box, Heading, Text, Image } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import { Code } from '@chakra-ui/react'
import Link from 'next/link'
import axios from "axios"

const Jarvis = () => {
  function download() {
    axios({
      url: "https://drive.google.com/file/d/1n8jZLFngzlVD2CuFWp78KUKZB4SX0kYD/view?usp=sharing",
      method: "GET",
      responseType: "blob"
    })
    .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]))
    
          const link = document.createElement('a')
          
          link.href = link
          
          link.setAttribute('download', 'PyAudio-0.2.11-cp310-cp310-win_amd64.whl')
    
          document.bosy.appendChild(link)
    
          link.click()
     })
  }
    return (
        <VStack>
            <Head><title>VenomCodes | Creating Jarvis </title></Head>
            <Flex>
                <iframe className={styles.vid} width="840" height="480" src="https://www.youtube.com/embed/UMwD7l0-BJk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            </Flex>
            <Tabs w="94%" p="2">
                <TabList>
                    <Tab>Overview</Tab>
                    <Tab>Source Code</Tab>
                    <Tab>Parts</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Heading>Creating Jarvis from scratch (Part 2)!!</Heading>
                        <Text mt="2rem" fontSize="1.5rem" >Creating the Wish function</Text>
                        <Text mt="1rem">This wish function will use the speak function created in the last part, to wish us according to the time. For example, if it is 10 AM, then it will wish us `Good Morning` and so on.</Text>
                        <Text>So first in the function, we will define what hour is by typing : <b> hour = int(datetime.datetime.now().hour) </b>. Then we will set the time for each wish as shown below -</Text>
                        <Image alt="image" className={styles.infoImg} src="https://64.media.tumblr.com/e422e16c62f84f91fbbafeb37ed67b7a/d7e9ae1c1b58a799-10/s640x960/9e163dfd25b4c615d165b8872f81f05470265355.png" width="450" height="350" />
                        <Text mt="2rem" fontSize="1.5rem">Creating the takeCommand function</Text>
                        <Text mt="1rem">What this function will do is that it will take commands from you using the microphone in your device and give an output based on the command.</Text>
                        <Text mt="1rem">For this we will use the speech recognition package that we installed in the previous part, to recoginze tha command comming from the source , which is the microphone. This is how it is done - </Text>
                        <Image alt="image" className={styles.infoImg} src="https://64.media.tumblr.com/e67c36b40775ad8d5f16e8c82e8a6429/65239f0dfbd3ccbc-12/s640x960/87eae736b42d0f88f16db793857c02e2af71bbae.png" width="450" height="350" />
                            <Text mt="1rem">Also to make these function work, we will have to called them out in a if loop, like this -</Text>
<Image alt="image" className={styles.infoImg} src="https://64.media.tumblr.com/b85eeb33ede4c97a3ac130fbea091612/b7fef1fbaf46745f-5f/s400x600/e1e89feeee7f73c5561e6672cfea86ec455c2e33.png" width="250" height="150" />
                    </TabPanel>
                    <TabPanel>
                        <Heading>Source Code</Heading>
                        <Text textColor="red">* Couldnt Update Source Code</Text>
                        <Box mt="1rem">
                            <Code p="4">
                                import pyttsx3
                                <br />
                                import speech_recognition as sr
                                <br />
                                import datetime
                                <br />
                                import wikipedia
                                <br />
                                import webbrowser
                                <br />
                                import os
                                <br />
                                import smtplib
                                <br />
                                <br />

                                print(&quot;Initializing Jarvis&quot;)
                                <br />
                                <br />

                                engine = pyttsx3.init(&quot;sapi5&quot;)
                                <br />
                                voices = engine.getProperty(&quot;voices&quot;)
                                <br />
                                voices.setProperty(&quot;voices&quot;, voices.[0].id)
                                <br />
                                <br />
                                def speak(text):
                                <br />
                                &nbsp;&nbsp;engine.say(text)
                                <br />
                                &nbsp;&nbsp;engine.runandwait()
                                <br />
                                <br />
                                speak(&quot;Hello World&quot;)
                            </Code>
                        </Box>
                        <Button onClick={download()}>Download Pyaudio File</Button>
                    </TabPanel>
                    <TabPanel>
                         <Table variant='simple'>
                          <Thead>
                            <Tr>
                              <Th>Part</Th>
                              <Th>Link</Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr>
                              <Td>Part 1</Td>
                              <Td><Link href="/coursepages/creating-jarvis-from-scratch">Click Here</Link></Td>
                            </Tr>
                            <Tr>
                              <Td>Part 2</Td>
                              <Td><Link href="/coursepages/creating-jarvis-from-scratch-part-2">Click Here</Link></Td>
                            </Tr>
                          </Tbody>
                        </Table>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </VStack>
    )
}

export default Jarvis
