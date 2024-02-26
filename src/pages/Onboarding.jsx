import React from "react";
import { Box, Button, FormControl, FormLabel, Heading, Input, useToast, Flex } from "@chakra-ui/react";
import { FaArrowRight, FaBrain } from "react-icons/fa";

const Onboarding = ({ onNext }) => {
  const toast = useToast();

  const handleOnboard = () => {
    toast({
      title: "Project created.",
      description: "Your new AI integration project has been successfully created.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    onNext();
  };

  return (
    <Flex direction="column" align="center" justify="center" height="100vh">
      <Box p={[3, 5]} shadow="md" borderWidth="1px" borderRadius="md" minW="648px" maxW="container.md" mx="auto">
        <Heading size="md" my="2" textAlign="center">
          <FaBrain /> Intuitive Onboarding
        </Heading>
        <FormControl id="project-name">
          <FormLabel>Project Name</FormLabel>
          <Input placeholder="Enter your project name" />
        </FormControl>
        <FormControl id="ai-task" mt={4}>
          <FormLabel>Primary Task for AI</FormLabel>
          <Input placeholder="Specify the primary task" />
        </FormControl>
        <Button
          variant="solid"
          mt={4}
          onClick={() => {
            handleOnboard();
            onNext();
          }}
        >
          Create Project <FaArrowRight />
        </Button>
      </Box>
    </Flex>
  );
};

export default Onboarding;
