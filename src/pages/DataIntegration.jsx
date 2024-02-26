import React from "react";
import { Box, Button, FormControl, FormLabel, Heading, Input, Textarea, Flex } from "@chakra-ui/react";
import { FaArrowRight, FaDatabase } from "react-icons/fa";

const DataIntegration = ({ onNext }) => {
  return (
    <Flex direction="column" align="center" justify="center" height="100vh">
      <Box p={[3, 5]} shadow="md" borderWidth="1px" borderRadius="md" maxW="container.md" mx="auto">
        <Heading size="md" my="2" textAlign="center">
          <FaDatabase /> Data Integration
        </Heading>
        <FormControl id="data-source">
          <FormLabel>Data Source</FormLabel>
          <Input placeholder="Enter data source URL or credentials" />
        </FormControl>
        <FormControl id="data-mapping" mt={4}>
          <FormLabel>Data Mapping</FormLabel>
          <Textarea placeholder="Map your data fields here" />
        </FormControl>
        <Button
          colorScheme="teal"
          mt={4}
          onClick={() => {
            if (onNext) onNext();
          }}
        >
          Next <FaArrowRight />
        </Button>
      </Box>
    </Flex>
  );
};

export default DataIntegration;
