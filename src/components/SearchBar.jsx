import React, { useState } from 'react';
import { Input, Box, Button, VStack } from '@chakra-ui/react';
import { SearchIcon } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <Box>
      <VStack spacing={4}>
        <Input
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button onClick={handleSearch} leftIcon={<SearchIcon />}>
          Search
        </Button>
      </VStack>
    </Box>
  );
};

export default SearchBar;