import { Box, Flex, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex p="1" bg="primary" color="white" align="center">
      <Box fontWeight="bold" fontSize="md">Architectura</Box>
      <Button colorScheme="teal" ml="auto" size="sm">About</Button>
      <Button colorScheme="teal" ml="4" size="sm">Services</Button>
      <Button colorScheme="teal" ml="4" size="sm">Contact</Button>
    </Flex>
  );
};

export default Navbar;
