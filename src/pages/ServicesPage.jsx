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
        Smirnov offers comprehensive design services tailored to your needs:
        <br />
        <br />
        ✅ Architectural Design – Full-scale planning and blueprints for new constructions.
        <br />
        ✅ Interior Design – Creating functional and stylish interiors.
        <br />
        ✅ Renovation & Remodeling – Transforming spaces with a modern touch.
        <br />
        ✅ Consultations – Personalized guidance to bring your vision to life.
      </Text>
      <Text mt={2} fontSize={textSize}>
        How It Works:
        <br />
        <br />
        1️⃣ Consultation – Understanding your project needs.
        <br />
        2️⃣ Design & Planning – Developing creative concepts and detailed plans.
        <br />
        3️⃣ Execution – Overseeing the design process to ensure perfection.
      </Text>
      <Button mt={4} size={useBreakpointValue({ base: 'sm', md: 'md' })}>
        Schedule a Consultation
      </Button>
    </Box>
  );
};

export default ServicesPage;
