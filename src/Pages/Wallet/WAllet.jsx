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

const WAllet = () => {
    return (
        <Box>
            <SectionHeading heading='Wallet' />
            <Box display='flex' gap={6}>
                <Card w='30%' h='fit-content'>
                    <CardBody>
                        <Text mb={1}>Total Balance</Text>
                        <Text fontSize='2xl' fontWeight={700} mb={4}>$524,46</Text>
                        <Divider />
                        <Box display='flex' alignItems='center' justifyContent='space-between' mt={4}>
                            <Text>Credit Limits</Text>
                            <Text fontSize='lg' fontWeight={700}>$25000</Text>
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
                                    <Td>inches</Td>
                                    <Td>millimetres (mm)</Td>
                                    <Td>millimetres (mm)</Td>
                                    <Td isNumeric>25.4</Td>
                                </Tr>
                                <Tr>
                                    <Td>feet</Td>
                                    <Td>centimetres (cm)</Td>
                                    <Td>centimetres (cm)</Td>
                                    <Td isNumeric>30.48</Td>
                                </Tr>
                                <Tr>
                                    <Td>yards</Td>
                                    <Td>metres (m)</Td>
                                    <Td>metres (m)</Td>
                                    <Td isNumeric>0.91444</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Card>
            </Box>
        </Box>
    );
};

export default WAllet;