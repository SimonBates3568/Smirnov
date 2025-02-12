import React from 'react';
import { Box, Heading, Text, Button, useBreakpointValue } from '@chakra-ui/react';

const ServicesPage = () => {
  const padding = useBreakpointValue({ base: 2, md: 5 });
  const headingSize = useBreakpointValue({ base: 'lg', md: 'xl' });
  const textSize = useBreakpointValue({ base: 'md', md: 'lg' });

  return (
    <Box p={padding}>
      <Heading size={headingSize}>Services</Heading>
      <Text mt={2} fontSize={textSize}>
        We offer a range of architectural services, from private homes to large-scale commercial projects.
      </Text>
      <Button mt={4} size={useBreakpointValue({ base: 'sm', md: 'md' })}>
        Get in Touch
      </Button>
    </Box>
  );
};

export default ServicesPage;
