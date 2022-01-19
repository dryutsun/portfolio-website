import { Container, Flex, VStack } from "@chakra-ui/react";

const IndexPage = () => {
  return (
    <Container maxWidth="container.xl" padding={0}>
      <Flex h="100vh" py={0}>
        <VStack
          w="full"
          h="full"
          p={1}
          spacing={1}
          alignItems="flex-start"
          bg="primary.500"
        ></VStack>
        <VStack
          w="full"
          h="full"
          p={1}
          spacing={1}
          alignItems="flex-start"
          bg="primary.500"
        ></VStack>
      </Flex>
    </Container>
  );
};

export default IndexPage;
