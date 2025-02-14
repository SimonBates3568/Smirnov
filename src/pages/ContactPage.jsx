// Frontend (React): A contact form where users can enter their name, email, and message.
// Backend (Third-Party Services) --> formspree

import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, useColorModeValue } from '@chakra-ui/react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const bg = useColorModeValue('gray.50', 'gray.800');
  const sectionBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'gray.200');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    // Basic client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.');
      return;
    }
    // Send data to Formspree
    try {
      const response = await fetch('https://formspree.io/f/xyzknykb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setSuccess('Your message has been sent successfully.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setError('There was a problem submitting your form.');
    }
  };

  return (
    <Box p={[2, 3, 5]} bg={bg} color={textColor}>
      <Box bg={sectionBg} p={5} borderRadius="md" mb={10}>
        <form onSubmit={handleSubmit}>
          <FormControl id="name" mb={4}>
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" value={formData.name} onChange={handleChange} />
          </FormControl>
          <FormControl id="email" mb={4}>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" value={formData.email} onChange={handleChange} />
          </FormControl>
          <FormControl id="message" mb={4}>
            <FormLabel>Message</FormLabel>
            <Textarea name="message" value={formData.message} onChange={handleChange} />
          </FormControl>
          {error && <Box color="red.500" mb={4}>{error}</Box>}
          {success && <Box color="green.500" mb={4}>{success}</Box>}
          <Button type="submit" colorScheme="blue">Submit</Button>
        </form>
      </Box>
    </Box>
  );
};

export default ContactForm;
