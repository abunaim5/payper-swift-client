import { Box, Button, Card, FormControl, FormErrorMessage, FormLabel, Input, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { FaSwift } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Register = () => {
    const [value, setValue] = React.useState('user');
    const axiosSecure = useAxiosSecure();
    const date = new Date().toLocaleDateString();

    const { mutate } = useMutation({
        mutationFn: async (userInfo) => {
            const res = await axiosSecure.post('/users', userInfo);
            return res;
        }
    })

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const {name, email, phone, password} = data;
        const userInfo = {
            name: name,
            email: email,
            phone: phone,
            role: value,
            createDate: date,
            password: password
        }
        mutate(userInfo);
    };

    return (
        <Box pb={6}>
            <Card flexDir='row'>
                <Box w='50%' bg='lightblue' px={6} py={8} borderLeftRadius='md'>
                    <Text fontSize='4xl'><FaSwift /></Text>
                    <Text fontSize='xl' fontWeight={600} mt={8}>Welcome to PayperSwift</Text>
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
                            <Input {...register("password", { required: 'Password is required.' })} type='number' placeholder='Password' autoComplete='pass' />
                            <FormErrorMessage>{errors.password && errors.password?.message}</FormErrorMessage>
                        </FormControl>
                        <Button type='submit' colorScheme='blue' w='full' mt={6}>Sign Up</Button>
                    </form>
                    <Text mt={6}>Already have an account? <Link to='/login'>Sign In</Link></Text>
                </Box>
            </Card>
        </Box>
    );
};

export default Register;