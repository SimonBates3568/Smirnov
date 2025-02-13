import React from 'react';
import { Box, Heading, Text, Image, Grid, GridItem, VStack, useColorModeValue } from '@chakra-ui/react';

const AboutPage = () => {
  const bg = useColorModeValue('gray.50', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'gray.200');

  return (
    <Box p={[2, 3, 5]} bg={bg} color={textColor}>
      <Heading fontSize={['2xl', '3xl', '4xl']} textAlign="center" mb={5} fontFamily="Poppins, sans-serif">About Us</Heading>
      
      {/* About */}
      <Grid templateColumns={['1fr', '1fr 1fr']} gap={6} mt={10} pb={50}>
        <GridItem>
          <VStack spacing={4} align="start">
            <Heading fontSize={['xl', '2xl']} mb={2} fontFamily="Poppins, sans-serif">Our Company</Heading>
            <Text fontSize={['sm', 'md']} fontFamily="Poppins, sans-serif">
              Smirnov is a leading architectural firm specializing in modern and elegant home designs. With years of experience in private and public housing projects, we blend creativity with functionality to bring unique architectural visions to life.
            </Text>
            <Text fontSize={['sm', 'md']} fontFamily="Poppins, sans-serif">
              We believe in simplicity, elegance, and modernity. Our designs prioritize clean lines, neutral color palettes, and seamless integration of space and light.
            </Text>
            <Text fontSize={['sm', 'md']} fontFamily="Poppins, sans-serif">
              We believe in a collaborative approach, working closely with clients to bring their vision to life while maintaining the highest standards of quality and sustainability.
            </Text>
          </VStack>
        </GridItem>
        <GridItem>
          <Image src="/public/images/about_us.JPG" alt="Company Building" borderRadius="md" objectFit="cover" boxSize="300px" />
        </GridItem>
      </Grid>
      
      {/* Our Mission */}
      <Grid templateColumns={['1fr', '1fr 1fr']} gap={6} mt={10} pt={50}>
        <GridItem>
          <VStack spacing={4} align="start">
            <Heading fontSize={['xl', '2xl']} mb={2} fontFamily="Poppins, sans-serif">Our Mission</Heading>
            <Text fontSize={['sm', 'md']} fontFamily="Poppins, sans-serif">
              Our mission is to innovate and inspire through our designs, ensuring every project is a reflection of our commitment to excellence.
            </Text>
          </VStack>
        </GridItem>
        {/* Our Vision */}
        <GridItem>
          <VStack spacing={4} align="start">
            <Heading fontSize={['xl', '2xl']} mb={2} fontFamily="Poppins, sans-serif">Our Vision</Heading>
            <Text fontSize={['sm', 'md']} fontFamily="Poppins, sans-serif">
              We envision a world where architecture harmonizes with nature, creating spaces that are both beautiful and sustainable.
            </Text>
          </VStack>
        </GridItem>
      </Grid>
      
      {/* Meet the Team */}
      <Box mt={10} p={50}>
        <Heading fontSize={['xl', '2xl']} mb={4} fontFamily="Poppins, sans-serif">Meet the Team</Heading>
        <Grid templateColumns={['1fr', '1fr 1fr 1fr']} gap={6}>
          <GridItem>
            <Image src="/public/images/maria.JPG" alt="Team Member 1" borderRadius="full" boxSize="120px" objectFit="cover" transition="transform 0.3s" _hover={{ transform: 'scale(1.1)' }} />
            <Text mt={2} fontSize={['sm', 'md']} textAlign="center" fontFamily="Poppins, sans-serif">Maria Smirnov</Text>
            <Text mt={2} fontSize={['sm', 'md']} textAlign="center" fontFamily="Poppins, sans-serif">Interior Designer</Text>
          </GridItem>
          <GridItem>
            <Image src="/public/images/peter.JPG" alt="Team Member 2" borderRadius="full" boxSize="120px" objectFit="cover" transition="transform 0.3s" _hover={{ transform: 'scale(1.1)' }} />
            <Text mt={2} fontSize={['sm', 'md']} textAlign="center" fontFamily="Poppins, sans-serif">Peter Smirnov</Text>
            <Text mt={2} fontSize={['sm', 'md']} textAlign="center" fontFamily="Poppins, sans-serif">Architect & Engineer</Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutPage;
