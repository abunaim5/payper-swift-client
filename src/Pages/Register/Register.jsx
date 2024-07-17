import { Box, Button, Card, FormControl, FormErrorMessage, FormLabel, Input, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { FaFacebook, FaLinkedin, FaPinterest, FaSwift, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
import loginBg from '../../assets/images/background.svg'
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import React from "react";

const Register = () => {
    const [value, setValue] = React.useState('user');
    // const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const date = new Date().toLocaleDateString();

    const { mutate, isSuccess, reset, data } = useMutation({
        mutationFn: async (userInfo) => {
            const res = await axiosPublic.post('/users', userInfo);
            return res;
        }
    })

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { name, email, phone, password } = data;
        const userInfo = {
            name: name,
            email: email,
            phone: phone,
            role: value,
            createDate: date,
            password: password,
            approval: 'pending'
        }
        mutate(userInfo);

    };

    if (isSuccess) {
        if (data.data !== "User already exist.") {
            alert('Please wait for admin approval.');
            navigate('/login')
        } else {
            alert('User already exist.');
        }
        reset();
    }

    return (
        <Box w='full' minH='100vh' display='flex' alignItems='center' justifyContent='center' my={{ base: 10, '2xl': 0 }}>
            <Card flexDir='row' w='65%' h='fit-content'>
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
                    <Text fontSize='xl' fontWeight={600} mb={6}>Sign Up</Text>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl isInvalid={errors.name}>
                            <FormLabel>Full Name</FormLabel>
                            <Input {...register("name", { required: 'Name is required.' })} type='Text' placeholder='Your Name' autoComplete='name' />
                            <FormErrorMessage>{errors.name && errors.name?.message}</FormErrorMessage>
                        </FormControl>
                        <FormControl my={4} isInvalid={errors.email}>
                            <FormLabel>Email</FormLabel>
                            <Input {...register("email", { required: 'Email is required.' })} type='email' placeholder='Your Email' autoComplete='email' />
                            <FormErrorMessage>{errors.email && errors.email?.message}</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={errors.phone}>
                            <FormLabel>Phone</FormLabel>
                            <Input {...register("phone", { required: 'Number is required.' })} type='number' placeholder='Your Number' autoComplete='phone' />
                            <FormErrorMessage>{errors.phone && errors.phone?.message}</FormErrorMessage>
                        </FormControl>
                        <RadioGroup onChange={setValue} value={value} my={4}>
                            <Stack direction='row'>
                                <Radio value='user'>User</Radio>
                                <Radio value='agent'>Agent</Radio>
                            </Stack>
                        </RadioGroup>
                        <FormControl isInvalid={errors.password}>
                            <FormLabel>Password</FormLabel>
                            <Input {...register("password", { required: 'Password is required.' })} type='password' placeholder='Password' autoComplete='pass' />
                            <FormErrorMessage>{errors.password && errors.password?.message}</FormErrorMessage>
                        </FormControl>
                        <Button type='submit' colorScheme='primary' w='full' mt={6}>Sign Up</Button>
                    </form>
                    <Text mt={6}>Already have an account? <Link to='/login'>Sign In</Link></Text>
                </Box>
            </Card>
        </Box>
    );
};

export default Register;