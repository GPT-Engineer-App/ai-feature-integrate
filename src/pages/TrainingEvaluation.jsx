import React from "react";
import { Box, Button, Flex, Heading, Progress, Alert, AlertIcon } from "@chakra-ui/react";
import { FaArrowRight, FaRocket } from "react-icons/fa";

const TrainingEvaluation = ({ onNext }) => {
  return (
    <Flex direction="column" align="center" justify="center" height="100vh">
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
        <Heading size="md" my="2" textAlign="center">
          <FaRocket /> Training and Evaluation
        </Heading>
        <Progress hasStripe value={45} mt={3} />
        <Alert status="info" mt={3}>
          <AlertIcon />
          Model is training. Current accuracy: 87%
        </Alert>
        <Button colorScheme="teal" mt={4} onClick={onNext}>
          Next <FaArrowRight />
        </Button>
      </Box>
    </Flex>
  );
};

export default TrainingEvaluation;
