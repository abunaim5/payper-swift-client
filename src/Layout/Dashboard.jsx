import { Box } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import TopNav from "../Pages/Shared/TopNav/TopNav";
import LeftNav from "../Pages/Shared/LeftNav/LeftNav";

const Dashboard = () => {
    const location = useLocation();

    const isLoginOrRegister = location.pathname === '/login' || location.pathname === '/register';

    return (
        <Box display={isLoginOrRegister ? null : 'flex'} h={isLoginOrRegister ? null : '100vh'}>
            {isLoginOrRegister ? null : <LeftNav />}
            <Box w={isLoginOrRegister ? 'full' : '90%'} px={12}>
                {isLoginOrRegister ? null : <TopNav />}
                <Outlet />
            </Box>
        </Box>
    );
};

export default Dashboard;