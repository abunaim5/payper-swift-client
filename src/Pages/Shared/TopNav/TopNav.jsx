import { SearchIcon, SunIcon } from "@chakra-ui/icons";
import { Avatar, Box, Icon, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { FaRegBell } from "react-icons/fa";

const TopNav = () => {
    return (
        <Box px={8} py={5} display='flex' alignItems='center' justifyContent='space-between'>
            <Box>
                <InputGroup w={96}>
                    <Input type='search' name='search' placeholder='Search Here' autoComplete="search" />
                    <InputRightAddon bg='#2F2CD8' color='white'><SearchIcon /></InputRightAddon>
                </InputGroup>
            </Box>
            <Box display='flex' alignItems='center' gap={6}>
                <SunIcon fontSize='2xl' />
                <Icon fontSize='2xl' as={FaRegBell} />
                <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
            </Box>
        </Box>
    );
};

export default TopNav;