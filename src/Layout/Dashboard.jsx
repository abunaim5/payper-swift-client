import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import TopNav from "../Pages/Shared/TopNav/TopNav";

const Dashboard = () => {
    return (
        <Box w='full'>
            <Box>
                <TopNav />
                <Outlet />
            </Box>
        </Box>
    );
};

export default Dashboard;