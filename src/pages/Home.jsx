import { Blockquote } from "../components/ui/blockquote.jsx";
import { HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";

import {
  Box,
  Heading,
  Button,
  Image,
  Stack,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      position="relative"
      textAlign="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
      minH="90vh"
      bg={colorMode === "light" ? "gray.100" : "gray.900"}
      color={colorMode === "light" ? "black" : "white"}
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
        zIndex={-1}
      />
      {/* Logo Image */}
      <Image
        src="/images/logo.jpg"
        alt="logo image"
        objectFit="cover"
        w={["50px", "75px", "100px"]}
        h={["50px", "75px", "100px"]}
        position="absolute"
        top={["10px", "20px", "30px"]}
        left={["10px", "20px", "30px"]}
        zIndex={0}
        borderRadius="full"
      />
      {/* Responsive Container for Icons */}
      <Box position="absolute" top={4} right={4} display="flex" gap={4} zIndex={1}>
        {/* Burger Bar Icon */}
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open Menu"
          onClick={onOpen}
        />
        {/* Light/Dark Mode Toggle */}
        <IconButton
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          aria-label="Toggle Color Mode"
          onClick={toggleColorMode}
        />
      </Box>
      {/* Drawer Component */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Button w="100%" mb={4} colorScheme="teal">View Portfolio</Button>
            <Button w="100%" mb={4} colorScheme="blue">Get in Touch</Button>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      {/* Hero Content */}
      <Stack spacing={6} maxW="800px" textAlign="center" justifyContent="center" alignItems="center" p={4}>
        <Heading as="h1" size={["2xl", "3xl", "4xl"]}>
          Interior Design & Engineering Solutions
        </Heading>
        <Blockquote showDash cite="Gouda" citeUrl="#"></Blockquote>
        <Blockquote showDash cite="Gouda" citeUrl="#">
          Welcome to Smirnov – your destination for modern home design and architectural excellence. Our mission is to create elegant, functional, and sustainable living spaces that reflect contemporary aesthetics and innovation.
        </Blockquote>
          <Button colorScheme="teal" size={["md", "lg"]}>View Portfolio</Button>
          <Button colorScheme="teal" variant="outline" size={["md", "lg"]}>Get in Touch</Button>
        </Stack>
    </Box>
  );
};

export default Home;
