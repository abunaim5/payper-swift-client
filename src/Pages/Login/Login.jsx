import { Box, Button, Card, FormControl, FormLabel, Input, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { FaFacebook, FaLinkedin, FaPinterest, FaSwift, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginBg from '../../assets/images/background.svg'

const Login = () => {
    return (
        <Box w='full' minH='100vh' display='flex' alignItems='center' justifyContent='center' my={{ base: 10, lg: 0 }}>
            <Card flexDir='row' w={{ base: 'full', lg: '65%' }} h='fit-content'>
                <Box w='50%' bg={`url(${loginBg})`} bgRepeat='no-repeat' bgPos='center' bgSize='cover' borderLeftRadius='md'>
                    <Box w='full' h='full' display='flex' flexDir='column' justifyContent='space-between' textColor='white' className="bg-[#2F2CD8]/65" px={6} py={8} borderLeftRadius='md'>
                        <Box>
                            <Text fontSize='4xl'><FaSwift /></Text>
                            <Text fontSize='xl' fontWeight={600} mt={8}>Welcome to PayperSwift</Text>
                        </Box>
                        <Box>
                            <Box display='flex' alignItems='center' gap={4}>
                                <FaFacebook cursor='pointer' />
                                <FaTwitter cursor='pointer' />
                                <FaLinkedin cursor='pointer' />
                                <FaPinterest cursor='pointer' />
                            </Box>
                            <Text fontSize='sm' mt={6}>Have an issue with login and register?</Text>
                            <Text fontSize='sm' mt={1} cursor='pointer'>Privacy Policy</Text>
                        </Box>
                    </Box>
                </Box>
                <Box w='50%' px={6} py={8}>
                    <Text fontSize='xl' fontWeight={600} mb={6}>Sign In</Text>
                    <form>
                        <Tabs isFitted variant='enclosed'>
                            <TabList mb='1em'>
                                <Tab>Email</Tab>
                                <Tab>Phone</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel px={0}>
                                    <FormControl>
                                        <FormLabel>Email</FormLabel>
                                        <Input type='email' placeholder='Your Email' />
                                    </FormControl>
                                </TabPanel>
                                <TabPanel px={0}>
                                    <FormControl>
                                        <FormLabel>Phone</FormLabel>
                                        <Input type='number' placeholder='Your Number' />
                                    </FormControl>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                        <FormControl>
                            <FormLabel>Password</FormLabel>
                            <Input type='number' placeholder='Password' />
                        </FormControl>
                        <Button type='submit' colorScheme='primary' w='full' mt={6}>Sign In</Button>
                    </form>
                    <Text mt={6}>Don&apos;t have an account? <Link to='/register'>Sign Up</Link></Text>
                </Box>
            </Card>
        </Box>
    );
};

export default Login;