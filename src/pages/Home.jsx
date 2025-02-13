import { Box, Heading, Button, Image, Text, Stack } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box
      position="relative"
      textAlign="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
      minH="90vh"
      bg="gray.900"
      color="white"
      p={10}
    >
      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="hero image"
        objectFit="cover"
        w="100%"
        h="100%"
        position="absolute"
        top={0}
        left={0}
        opacity={0.4} // Adds a slight overlay effect
        z-index={-1}
            />
              /* logo Image */}
              <Image
                src="/images/logo.jpg"
                alt="hero image"
                objectFit="cover"
                w={200}
                h={200}
                position="absolute"
                top={0}
                left={0}
                zIndex={0}
                borderRadius="full"
              />
              {/* Hero Content */}
      <Stack spacing={6} maxW="800px" textAlign="center" justifyContent="center" alignItems="center">
        <Heading fontSize={["3xl", "5xl"]} fontWeight="bold">
          Elevating Modern Architecture
        </Heading>
        <Text fontSize="xl">
          Welcome to Smirnov – your destination for modern home design and architectural excellence. Our mission is to create elegant, functional, and sustainable living spaces that reflect contemporary aesthetics and innovation.
        </Text>
        <Stack direction="row" spacing={4} justify="center">
          <Button colorScheme="teal" size="lg">View Portfolio</Button>
          <Button colorScheme="gray" variant="outline" size="lg">Get in Touch</Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Home;
