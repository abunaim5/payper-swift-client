import { Box, Button, Text } from "@chakra-ui/react";
import { FaWallet } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const userRouteLinks = [
    {
        name: 'Dashboard',
        icon: MdDashboard
    },
    {
        name: 'Wallet',
        icon: FaWallet
    },
    {
        name: 'Send Money',
        icon: MdDashboard
    },
    {
        name: 'Cash Out',
        icon: MdDashboard
    },
    {
        name: 'Cash In',
        icon: MdDashboard
    },
]

const LeftNav = () => {
    return (
        <Box w='14%' px={3} py={6} display='flex' gap={8} alignItems='center' flexDir='column' bg='#2F2CD8'>
            <Text fontSize='xl' fontWeight={800} textColor='white'>PayperSwift</Text>
            <Box w='full' display='flex' flexDir='column' gap={4}>
                {
                    userRouteLinks.map((link, idx) => <Button key={idx} w='full' leftIcon={<link.icon />} variant='solid' justifyContent='left'>
                        {link.name}
                    </Button>)
                }
            </Box>
        </Box>
    );
};

export default LeftNav;