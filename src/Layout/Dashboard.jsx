import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <Box>
            <Outlet />
        </Box>
    );
};

export default Dashboard;