import React from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button, useBreakpointValue } from '@chakra-ui/react';

const ContactPage = () => {
  const padding = useBreakpointValue({ base: 2, md: 5 });

  return (
    <Box p={padding}>
      <Heading textAlign="center" fontSize={{ base: '2xl', md: '4xl' }}>Contact Us</Heading>
      <FormControl mt={4}>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Your Name" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Your Email" />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Message</FormLabel>
        <Textarea placeholder="Your Message" />
      </FormControl>
      <Button mt={4} colorScheme="teal" width={{ base: '100%', md: 'auto' }}>Send Message</Button>
    </Box>
  );
};

export default ContactPage;
