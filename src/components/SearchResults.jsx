import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

const SearchResults = ({ results }) => {
  return (
    <Box>
      <VStack spacing={4} align="start">
        {results.length > 0 ? (
          results.map((result, index) => (
            <Box key={index} p={4} borderWidth={1} borderRadius="md" width="100%">
              <Text fontSize="lg" fontWeight="bold">
                {result.title}
              </Text>
              <Text>{result.content}</Text>
            </Box>
          ))
        ) : (
          <Text>No results found</Text>
        )}
      </VStack>
    </Box>
  );
};

export default SearchResults;