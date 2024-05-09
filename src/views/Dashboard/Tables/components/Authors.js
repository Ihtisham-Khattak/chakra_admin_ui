// Chakra imports
import {
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,TableContainer,TableCaption,Td,Tfoot,Flex,
  Stack,InputGroup,InputLeftElement,Input,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesTableRow from "components/Tables/TablesTableRow";
import { FaTrash } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import Trash from '../../../../assets/svg/Trash.svg';
import edit from '../../../../assets/svg/edit.svg';
import React from "react";
import { EditIcon, CreateIcon, DeleteIcon,SearchIcon } from '@chakra-ui/icons';

const Authors = ({ title, captions, data }) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p='6px 0px 22px 0px' >
        {/* <Text fontSize='xl' color={textColor} fontWeight='bold'>
          {title}
        </Text> */}
        <Flex direction={"row"} justifyContent={"space-between"}>
        <Stack spacing={4} >
  <InputGroup borderRadius="lg">
    <InputLeftElement pointerEvents='none'>
      <SearchIcon h={'20px'} w={"20px"} color='gray.300' />
    </InputLeftElement>
    <Input type='tel' placeholder='Phone number' />
  </InputGroup >
  </Stack>
  </Flex>
      </CardHeader>
      <CardBody>
      <TableContainer w={'100%'} border={'1px'} borderColor={'gray.100'} borderRadius={'12px'}>
  <Table variant='simple'>
    <Thead bg={'gray.100'}>
      <Tr>
        <Th>Patient ID</Th>
        <Th>ID Other</Th>
        <Th>Name</Th>
        <Th>D.O.B</Th>
        <Th>Gender</Th>
        <Th>Action</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>2434342</Td>
        <Td>...</Td>
        <Td >13/05/1998</Td>
        <Td >John Doe</Td>
        <Td >Male</Td>
        <Td >
          <Flex direction='row'>
       <img src={edit} style={{ marginRight: '5px' }}/> 
{/* <FaTrash/> */}
<img src={Trash}/>
{/* <Trash/> */}
      </Flex>
        </Td>

      </Tr>
      <Tr>
        <Td>2434342</Td>
        <Td>...</Td>
        <Td >13/05/1998</Td>
        <Td >John Doe</Td>
        <Td >Male</Td>
        <Td >
          <Flex direction='row'>
       <img src={edit} style={{ marginRight: '5px' }}/> 
{/* <FaTrash/> */}
<img src={Trash}/>
{/* <Trash/> */}
      </Flex>
        </Td>

      </Tr>
      <Tr>
        <Td>2434342</Td>
        <Td>...</Td>
        <Td >13/05/1998</Td>
        <Td >John Doe</Td>
        <Td >Male</Td>
        <Td >
          <Flex direction='row'>
       <img src={edit} style={{ marginRight: '5px' }}/> 
{/* <FaTrash/> */}
<img src={Trash}/>
{/* <Trash/> */}
      </Flex>
        </Td>

      </Tr>
    </Tbody>
  </Table>
</TableContainer>
        {/* <Table variant='simple'  >
          <Thead  >
            <Tr my='.8rem' pl='0px' color='gray' bg={'gray'}>
              {captions.map((caption, idx) => {
                return (
                  <Th color='gray.400' key={idx} ps={idx === 0 ? "0px" : null}>
                    {caption}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row) => {
              return (
                <TablesTableRow
                  key={`${row.email}-${row.name}`}
                  ID={row.ID}
                  Other={row.Other}
                  DOB={row.DOB}
                  Gender={row.Gender}
                />
              );
            })}
          </Tbody>
        </Table> */}
      </CardBody>
    </Card>
  );
};

export default Authors;
