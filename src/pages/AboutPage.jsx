import React from 'react';
import { Box, Heading, Text, Image, Grid, GridItem, VStack, useColorModeValue } from '@chakra-ui/react';

const AboutPage = () => {
  const bg = useColorModeValue('gray.50', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'gray.200');

  return (
    <Box p={[2, 3, 5]} bg={bg} color={textColor}>
      <Heading fontSize={['2xl', '3xl', '4xl']} textAlign="center" mb={5} fontFamily="Poppins, sans-serif">About Us</Heading>
      <Text mt={[1, 2, 3]} fontSize={['sm', 'md', 'lg']} textAlign="center" fontFamily="Poppins, sans-serif">
        We specialize in modern architecture, creating beautiful, sustainable, and functional spaces for private and public projects.
      </Text>
      <Box mt="4" mx="auto" maxW="600px" width="100%">
        <Image src="../public/images/Screenshot 2025-02-12 at 20.20.51 (1).jpg" alt="Hero Image" borderRadius="md" boxShadow="lg" transition="transform 0.3s" _hover={{ transform: 'scale(1.05)' }} />
      </Box>
      <Grid templateColumns={['1fr', '1fr 1fr']} gap={6} mt={10}>
        <GridItem>
          <VStack spacing={4} align="start">
            <Heading fontSize={['xl', '2xl']} mb={2} fontFamily="Poppins, sans-serif">Our Mission</Heading>
            <Text fontSize={['sm', 'md']} fontFamily="Poppins, sans-serif">
              Our mission is to innovate and inspire through our designs, ensuring every project is a reflection of our commitment to excellence.
            </Text>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack spacing={4} align="start">
            <Heading fontSize={['xl', '2xl']} mb={2} fontFamily="Poppins, sans-serif">Our Vision</Heading>
            <Text fontSize={['sm', 'md']} fontFamily="Poppins, sans-serif">
              We envision a world where architecture harmonizes with nature, creating spaces that are both beautiful and sustainable.
            </Text>
          </VStack>
        </GridItem>
      </Grid>
      <Box mt={10}>
        <Heading fontSize={['xl', '2xl']} mb={4} fontFamily="Poppins, sans-serif">Meet the Team</Heading>
        <Grid templateColumns={['1fr', '1fr 1fr 1fr']} gap={6}>
          <GridItem>
            <Image src="../public/images/team_member_1.jpg" alt="Team Member 1" borderRadius="full" boxSize="150px" objectFit="cover" transition="transform 0.3s" _hover={{ transform: 'scale(1.1)' }} />
            <Text mt={2} fontSize={['sm', 'md']} textAlign="center" fontFamily="Poppins, sans-serif">Maria</Text>
          </GridItem>
          <GridItem>
            <Image src="../public/images/team_member_2.jpg" alt="Team Member 2" borderRadius="full" boxSize="150px" objectFit="cover" transition="transform 0.3s" _hover={{ transform: 'scale(1.1)' }} />
            <Text mt={2} fontSize={['sm', 'md']} textAlign="center" fontFamily="Poppins, sans-serif">Peter</Text>
          </GridItem>
          <GridItem>
            <Image src="../public/images/team_member_3.jpg" alt="Team Member 3" borderRadius="full" boxSize="150px" objectFit="cover" transition="transform 0.3s" _hover={{ transform: 'scale(1.1)' }} />
            <Text mt={2} fontSize={['sm', 'md']} textAlign="center" fontFamily="Poppins, sans-serif">Alex</Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutPage;
