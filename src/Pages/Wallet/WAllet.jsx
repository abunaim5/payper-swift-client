import {
    Box,
    Card,
    CardBody,
    Text,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Divider,
} from "@chakra-ui/react";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";

const Wallet = () => {
    return (
        <Box>
            <SectionHeading heading='Wallet' />
            <Box display='flex' gap={6}>
                <Card w='30%' h='fit-content'>
                    <CardBody>
                        <Text mb={1}>Total Balance</Text>
                        <Text fontSize='3xl' fontWeight={500} mb={4}>$124,46</Text>
                        <Divider />
                        <Box display='flex' alignItems='center' justifyContent='space-between' mt={4}>
                            <Text>Credit Limits</Text>
                            <Text fontSize='lg' fontWeight={600}>$25000</Text>
                        </Box>
                    </CardBody>
                </Card>
                <Card w='70%'>
                    <TableContainer>
                        <Table variant='simple'>
                            <TableCaption>Transaction History</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Category</Th>
                                    <Th>Date</Th>
                                    <Th>Trans ID</Th>
                                    <Th isNumeric>Amount</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>Cash In</Td>
                                    <Td>millimetres (mm)</Td>
                                    <Td>millimetres (mm)</Td>
                                    <Td isNumeric>$900</Td>
                                </Tr>
                                <Tr>
                                    <Td>Send Money</Td>
                                    <Td>centimetres (cm)</Td>
                                    <Td>centimetres (cm)</Td>
                                    <Td isNumeric>$500</Td>
                                </Tr>
                                <Tr>
                                    <Td>Cash Out</Td>
                                    <Td>metres (m)</Td>
                                    <Td>metres (m)</Td>
                                    <Td isNumeric>$700</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Card>
            </Box>
        </Box>
    );
};

export default Wallet;