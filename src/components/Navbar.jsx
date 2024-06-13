import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.700" p={4}>
      <Flex align="center">
        <Text fontSize="xl" color="white" fontWeight="bold">
          Data Organization System
        </Text>
        <Spacer />
        <Flex>
          <Link as={NavLink} to="/" p={2} color="white" _hover={{ textDecoration: "none", bg: "brand.800" }}>
            Home
          </Link>
          <Link as={NavLink} to="/about" p={2} color="white" _hover={{ textDecoration: "none", bg: "brand.800" }}>
            About
          </Link>
          <Link as={NavLink} to="/contact" p={2} color="white" _hover={{ textDecoration: "none", bg: "brand.800" }}>
            Contact
          </Link>
          <Link as={NavLink} to="/search" p={2} color="white" _hover={{ textDecoration: "none", bg: "brand.800" }}>
            Search
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;