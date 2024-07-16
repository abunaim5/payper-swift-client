import { Box, Button, Text } from "@chakra-ui/react";
import { FaUser, FaWallet } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

const userRouteLinks = [
    {
        name: 'Dashboard',
        icon: MdDashboard,
        route: '/'
    },
    {
        name: 'Profile',
        icon: FaUser,
        route: '/wallet'
    },
    {
        name: 'Wallet',
        icon: FaWallet,
        route: '/wallet'
    },
    {
        name: 'Send Money',
        icon: MdDashboard,
        route: '/send-money'
    },
    {
        name: 'Cash Out',
        icon: MdDashboard,
        route: '/cash-out'
    },
    {
        name: 'Cash In',
        icon: MdDashboard,
        route: '/cash-in'
    },
]

const LeftNav = () => {
    return (
        <Box w='14%' px={3} py={6} display='flex' gap={8} alignItems='center' flexDir='column' bg='#2F2CD8'>
            <Text fontSize='xl' fontWeight={800} textColor='white'>PayperSwift</Text>
            <Box w='full' display='flex' flexDir='column' gap={4}>
                {
                    userRouteLinks.map((link, idx) => <Button as={NavLink} to={link.route} key={idx} w='full' leftIcon={<link.icon />} variant='solid' justifyContent='left'>
                        {link.name}
                    </Button>)
                }
            </Box>
        </Box>
    );
};

export default LeftNav;