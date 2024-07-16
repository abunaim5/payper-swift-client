import { Box, Text } from "@chakra-ui/react";

const SectionHeading = ({ heading }) => {
    return (
        <Box mb={8}>
            <Text fontSize='xl' fontWeight={700}>{heading}</Text>
            <Text>Welcome to PayperSwift Finance Management.</Text>
        </Box>
    );
};

export default SectionHeading;