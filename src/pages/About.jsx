import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading>About Us</Heading>
      <Text>
        Welcome to the Data Organization System. Our goal is to provide a robust platform for organizing and managing your data efficiently.
      </Text>
    </VStack>
  </Box>
);

export default About;