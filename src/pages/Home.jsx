import { Box, Heading, Button, Image, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box textAlign="center" mt="20" bg="gray.800" color="white" py="10" px="5">
      <Heading fontSize="4xl" mb="4">Smirnov Modern Architecture & Design</Heading>
      <Text fontSize="xl" mb="6">Innovative solutions for modern living spaces</Text>
      <Button colorScheme="teal" size="lg" mb="6">View Portfolio</Button>
      <Box mt="4" mx="auto" maxW="600px" width="100%">
        <Image src="../public/images/best.JPG" alt="Hero Image" borderRadius="md" boxShadow="lg" />
      </Box>
    </Box>
  );
};

export default Home;
