import React from 'react';
import { Box, Heading, Text, Image, Button, Stack } from '@chakra-ui/react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { version as pdfjsVersion } from 'pdfjs-dist/package.json';

const PortfolioPage = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Box p={5}>
      <Heading>Portfolio</Heading>
      <Text mt={2}>Explore our recent architectural projects in various categories.</Text>
      
      <Stack spacing={6} mt={4}>
        <Box>
          <Image src="/images/path-to-project1.jpg" alt="Project 1" />
          <Text mt={2}>Private Homes</Text>
          <Button mt={2}>View Project</Button>
          <Box mt={4}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}>
              <Viewer fileUrl="/public/images/pdf_1.pdf" plugins={[defaultLayoutPluginInstance]} />
            </Worker>
          </Box>
        </Box>
        <Box>
          <Image src="/images/path-to-project2.jpg" alt="Project 2" />
          <Text mt={2}>Public Spaces</Text>
          <Button mt={2}>View Project</Button>
          <Box mt={4}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}>
              <Viewer fileUrl="/public/images/pdf_2.pdf" plugins={[defaultLayoutPluginInstance]} />
            </Worker>
          </Box>
        </Box>
        <Box>
          <Image src="/images/path-to-project3.jpg" alt="Project 3" />
          <Text mt={2}>Interior Design</Text>
          <Button mt={2}>View Project</Button>
          <Box mt={4}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}>
              <Viewer fileUrl="/public/images/pdf_1.pdf" plugins={[defaultLayoutPluginInstance]} />
            </Worker>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default PortfolioPage;
