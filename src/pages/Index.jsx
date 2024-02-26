import React from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, Textarea, Checkbox, Select, Progress, Alert, AlertIcon, useToast, Image, Spinner } from "@chakra-ui/react";
import { FaArrowRight, FaBrain, FaDatabase, FaLock, FaRocket, FaWrench } from "react-icons/fa";

const Index = () => {
  const [isDeploying, setIsDeploying] = React.useState(false);
  const [deployStep, setDeployStep] = React.useState(0);
  const toast = useToast();

  const handleDeploy = () => {
    setIsDeploying(true);
    setDeployStep(1);
    setTimeout(() => setDeployStep(2), 1000); // Simulate the deployment step sequence
    setTimeout(() => setDeployStep(3), 2000);
    setTimeout(() => {
      setIsDeploying(false);
      setDeployStep(0);
      toast({
        title: "Deployment complete.",
        description: "Your AI model has been deployed successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }, 3000);
  };

  const handleOnboard = () => {
    toast({
      title: "Project created.",
      description: "Your new AI integration project has been successfully created.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" p={5}>
      <Heading as="h1" size="xl" mb={5} textAlign="center">
        AI Feature Integration Platform
      </Heading>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-around" mb={5}>
        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
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
          <Button colorScheme="teal" mt={4} onClick={handleOnboard}>
            Create Project <FaArrowRight />
          </Button>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" ml={{ md: 5 }}>
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
        </Box>
      </Flex>

      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-around" mb={5}>
        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
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
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" ml={{ md: 5 }}>
          <Heading size="md" my="2" textAlign="center">
            <FaRocket /> Training and Evaluation
          </Heading>
          <Progress hasStripe value={45} mt={3} />
          <Alert status="info" mt={3}>
            <AlertIcon />
            Model is training. Current accuracy: 87%
          </Alert>
        </Box>
      </Flex>

      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-around">
        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
          <Heading size="md" my="2" textAlign="center">
            <FaLock /> Compliance and Security
          </Heading>
          <Checkbox defaultIsChecked>GDPR Compliant</Checkbox>
          <Checkbox mt={2} defaultIsChecked>
            Encrypt Data at Rest
          </Checkbox>
          <Checkbox mt={2} defaultIsChecked>
            Encrypt Data in Transit
          </Checkbox>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md" ml={{ md: 5 }}>
          <Heading size="md" my="2" textAlign="center">
            <FaRocket /> Deployment and Production Readiness
          </Heading>
          <Text mt={2}>Deployment Environment:</Text>
          <Select mt={1} placeholder="Select environment">
            <option value="cloud">Cloud</option>
            <option value="on-prem">On-premises</option>
          </Select>
          {isDeploying ? (
            <Flex direction="column" align="center" justify="center">
              {deployStep === 1 && (
                <>
                  <Text>Initializing deployment...</Text>
                  <Spinner />
                </>
              )}
              {deployStep === 2 && (
                <>
                  <Text>Deploying model...</Text>
                  <Spinner />
                </>
              )}
              {deployStep === 3 && (
                <>
                  <Text>Finalizing...</Text>
                  <Spinner />
                </>
              )}
            </Flex>
          ) : (
            <Button colorScheme="green" mt={3} w="full" onClick={handleDeploy}>
              Deploy <FaRocket />
            </Button>
          )}
        </Box>
      </Flex>

      <Stack spacing={3} mt={10}>
        <Heading size="lg" textAlign="center">
          <FaLock /> Monitoring and Maintenance
        </Heading>
        <Text textAlign="center">Comprehensive tools and dashboards for real-time monitoring of your AI features.</Text>
        <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb25pdG9yaW5nJTIwZGFzaGJvYXJkfGVufDB8fHx8MTcwODk0NDAzMHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Monitoring Dashboard" borderRadius="md" />
      </Stack>

      <Stack spacing={3} mt={10} mb={10}>
        <Heading size="lg" textAlign="center">
          <FaWrench /> Documentation and Collaboration
        </Heading>
        <Text textAlign="center">Collaborate with team members and access detailed documentation for your AI integration projects.</Text>
        <Image src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGF0aW9uJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3MDg5NDQwMzF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Documentation Collaboration" borderRadius="md" />
      </Stack>
    </Container>
  );
};

export default Index;
