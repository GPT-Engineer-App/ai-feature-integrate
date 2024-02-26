import React from "react";
import { Box, Button, FormControl, FormLabel, Heading, Select, Input, Flex } from "@chakra-ui/react";
import { FaArrowRight, FaWrench } from "react-icons/fa";

const ModelSelection = ({ onNext }) => {
  return (
    <Flex direction="column" align="center" justify="center" height="100vh">
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
        <Heading size="md" my="2" textAlign="center">
          <FaWrench /> Model Selection and Customization
        </Heading>
        <FormControl id="model-selection">
          <FormLabel>Model Type</FormLabel>
          <Select placeholder="Select model">
            <option value="cnn">Convolutional Neural Network</option>
            <option value="rnn">Recurrent Neural Network</option>
            <option value="transformer">Transformer Model</option>
          </Select>
        </FormControl>
        <FormControl id="model-parameters" mt={4}>
          <FormLabel>Customize Parameters</FormLabel>
          <Input placeholder="Specify model parameters" />
        </FormControl>
        <Button colorScheme="teal" mt={4} onClick={onNext}>
          Next <FaArrowRight />
        </Button>
      </Box>
    </Flex>
  );
};

export default ModelSelection;