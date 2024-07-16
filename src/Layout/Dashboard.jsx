import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import TopNav from "../Pages/Shared/TopNav/TopNav";
import LeftNav from "../Pages/Shared/LeftNav/LeftNav";

const Dashboard = () => {
    return (
        <Box display='flex' h='100vh'>
            <LeftNav />
            <Box w='90%' px={12}>
                <TopNav />
                <Outlet />
            </Box>
        </Box>
    );
};

export default Dashboard;