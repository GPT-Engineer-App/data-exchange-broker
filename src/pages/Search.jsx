import React, { useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import SearchBar from '../components/SearchBar.jsx';
import SearchResults from '../components/SearchResults.jsx';
import Fuse from 'fuse.js';

const data = [
  { title: 'Document 1', content: 'This is the content of document 1' },
  { title: 'Document 2', content: 'This is the content of document 2' },
  { title: 'Document 3', content: 'This is the content of document 3' },
];

const fuse = new Fuse(data, {
  keys: ['title', 'content'],
  includeScore: true,
  threshold: 0.3,
});

const Search = () => {
  const [results, setResults] = useState([]);

  const handleSearch = (query) => {
    const result = fuse.search(query).map(({ item }) => item);
    setResults(result);
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Search</Heading>
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={results} />
    </Box>
  );
};

export default Search;