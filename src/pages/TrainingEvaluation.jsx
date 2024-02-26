import React from "react";
import { Box, Button, Flex, Heading, Progress, Alert, AlertIcon } from "@chakra-ui/react";
import { FaArrowRight, FaRocket } from "react-icons/fa";

const TrainingEvaluation = ({ onNext }) => {
  return (
    <Flex direction="column" align="center" justify="center" height="100vh">
      <Box p={[3, 5]} shadow="md" borderWidth="1px" borderRadius="md" minW="648px" maxW="container.md" mx="auto">
        <Heading size="md" my="2" textAlign="center">
          <FaRocket /> Training and Evaluation
        </Heading>
        <Progress hasStripe value={45} mt={3} />
        <Alert status="info" mt={3}>
          <AlertIcon />
          Model is training. Current accuracy: 87%
        </Alert>
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

export default TrainingEvaluation;
