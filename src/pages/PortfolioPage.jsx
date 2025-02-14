import React, { useState } from 'react';
import { Box, Heading, Text, Image, Button, Grid, Card, CardBody } from '@chakra-ui/react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { version as pdfjsVersion } from 'pdfjs-dist/package.json';

const PortfolioPage = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { id: 1, title: 'Private Homes', image: '/images/path-to-project1.jpg', pdf: '/public/images/pdf_1.pdf' },
    { id: 2, title: 'Public Spaces', image: '/images/path-to-project2.jpg', pdf: '/public/images/pdf_2.pdf' },
    { id: 3, title: 'Interior Design', image: '/images/path-to-project3.jpg', pdf: '/public/images/pdf_1.pdf' },
  ];

  return (
    <Box p={5}>
      <Heading>Portfolio</Heading>
      <Text mt={2}>Explore our recent architectural projects in various categories.</Text>
      
      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6} mt={4}>
        {projects.map(project => (
          <Card key={project.id}>
            <Image src={project.image} alt={project.title} />
            <CardBody>
              <Text mt={2}>{project.title}</Text>
              <Button mt={2} onClick={() => setSelectedProject(project.id)}>View Project</Button>
              {selectedProject === project.id && (
                <>
                  <Button mt={2} ml={2} onClick={() => setSelectedProject(null)}>Close</Button>
                  <Box mt={4}>
                    <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`}>
                      <Viewer fileUrl={project.pdf} plugins={[defaultLayoutPluginInstance]} />
                    </Worker>
                  </Box>
                </>
              )}
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

export default PortfolioPage;
