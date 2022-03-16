import React from 'react';
import { VStack, Flex, Box, Heading, Text, Image } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import { Code } from '@chakra-ui/react'

const Jarvis = () => {
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
                    <Tab isDisabled>Parts</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Heading>Creating Jarvis from scratch!!</Heading>
                        <Text mt="2rem" fontSize="1.5rem" >Installation</Text>
                        <ul className={styles.infolist}>
                            <li><b>Install Pyttsx3</b> : You can install Pyttsx3 by clicking <a href="https://pypi.org/project/pyttsx3/">here</a> and coping the command and pasting it in the terminal or by typing <b>`pip  install Pyttsx3`</b> in the terminal. </li><br />
                            <li><b>Install SpeechRecognition</b> : You can install SpeechRecognition by clicking <a href="https://pypi.org/project/speechrecognition/">here</a> and coping the command and pasting it in the terminal or by typing <b>`pip  install SpeechRecognition`</b> in the terminal.</li><br />
                            <li><b>Install Wikipedia</b> : You can install Wikipedia by clicking <a href="https://pypi.org/project/wikipedia/">here</a> and coping the command and pasting it in the terminal or by typing <b>`pip  install wikipedia`</b> in the terminal.</li>
                        </ul>
                        <Text mt="2rem" fontSize="1.5rem">Importing  the modules</Text>
                        <Text mt="1rem">Now after installing the necessary modules, we will import it in the python file that we have created. Import the modules installed and import <b>`datetime`, `os`, `webbrowser` and `smtplib`</b> as shown below-</Text>
                        <Image alt="image" className={styles.infoImg} src="https://64.media.tumblr.com/d2b09212aaab1b8b8c6af435e37aa407/9ea9178e80943b18-1e/s400x600/b84d8470ab77ad739e849d9288c9f7661ac6e4ac.png" width="450" height="350" />
                        <Text>Now after importing, we will add a print function that will print <b>Initializing Jarvis.</b> And after that, if you run the program you should get an output as shown below -</Text>
                        <Image alt="image" className={styles.infoImg} src="https://64.media.tumblr.com/64fef6ae74994d966a9c26c59a6d6aac/4cbbf121844521e0-97/s500x750/14213bfef94286b652ef425429e49210283b6ea5.png" width="450" height="350" />
                        <Text mt="2rem" fontSize="1.5rem">Defining the engine</Text>
                        <Text mt="1rem">After that we will define an engine which will come from pyttsx3 and type <b>sapi5</b> in the parenthesis. Then we will also define voice which will select a voice for the assistant , the code is as shown below -</Text>
                        <Image alt="image" className={styles.infoImg} src="https://64.media.tumblr.com/1986896d129547f5f3dff6ce98228525/c486a7f249dad7d3-07/s400x600/92f31a9027aa5bd665385cef680fc421e75646d1.png" width="450" height="200"/>
                        <Text mt="2rem" fontSize="1.5rem">Defining the speech function</Text>
                        <Text mt="1rem">Now we will define a function called speak and this function will pronounce anything that we give it as a text. then we will add <b>engine.say(text) and engine.runandwait()</b>. So it will run and then wait for the audio to pronounce. Now if you add a speak function saying <b>`Hello World`</b>, you will hear hello world from your device.</Text>
                        <Text mt="2rem" fontSize="1.25rem" fontWeight="semibold">So that was it for the part 1 of this Jarvis course. More parts will be coming soon. Thank you for being with me and I will see you in the next part!!</Text>
                    </TabPanel>
                    <TabPanel>
                        <Heading>Source Code</Heading>
                        <Text mt="1rem" fontSize="1rem" color="red" fontWeight="bold">* Note : This source code will be editted as we go on with this course.  </Text>
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
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </VStack>
    )
}

export default Jarvis
