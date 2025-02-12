import React from 'react';
import { Box, Heading, Text, Grid, Image, Button, useBreakpointValue } from '@chakra-ui/react';

const PortfolioPage = () => {
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3 });

  return (
    <Box p={5}>
      <Heading>Portfolio</Heading>
      <Text mt={2}>Explore our recent architectural projects in various categories.</Text>
      <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={6}>
        <Box>
          <Image src="/path-to-project1.jpg" alt="Project 1" />
          <Text mt={2}>Private Homes</Text>
          <Button mt={2}>View Project</Button>
        </Box>
        <Box>
          <Image src="/path-to-project2.jpg" alt="Project 2" />
          <Text mt={2}>Public Spaces</Text>
          <Button mt={2}>View Project</Button>
        </Box>
        <Box>
          <Image src="/path-to-project3.jpg" alt="Project 3" />
          <Text mt={2}>Interior Design</Text>
          <Button mt={2}>View Project</Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default PortfolioPage;
