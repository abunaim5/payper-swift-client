import { AbsoluteCenter, Box, Button, Card, Divider, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { FaSwift } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <Box pb={6}>
            <Card flexDir='row'>
                <Box w='50%' bg='lightblue' px={6} py={8} borderLeftRadius='md'>
                    <Text fontSize='4xl'><FaSwift /></Text>
                    <Text fontSize='xl' fontWeight={600} mt={8}>Welcome to PayperSwift</Text>
                </Box>
                <Box w='50%' px={6} py={8}>
                    <Text fontSize='xl' fontWeight={600} mb={6}>Sign In</Text>
                    <form>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' placeholder='Your Email' />
                        </FormControl>
                        <Box position='relative' padding={6}>
                            <Divider />
                            <AbsoluteCenter bg='white' px='4'>
                                OR
                            </AbsoluteCenter>
                        </Box>
                        <FormControl mb={4}>
                            <FormLabel>Phone</FormLabel>
                            <Input type='number' placeholder='Your Number' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Password</FormLabel>
                            <Input type='number' placeholder='Password' />
                        </FormControl>
                        <Button type='submit' colorScheme='blue' w='full' mt={6}>Sign In</Button>
                    </form>
                    <Text mt={6}>Don&apos;t have an account? <Link to='/register'>Sign Up</Link></Text>
                </Box>
            </Card>
        </Box>
    );
};

export default Login;