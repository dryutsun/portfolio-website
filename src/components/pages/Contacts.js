import {
  HStack,
  Center,
  Text,
  Heading,
  Container,
  VStack,
  Flex,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxWidth="container.xl" padding={0}>
      <Flex h="100vh" py={0}>
        <VStack
          w="70%"
          h="full"
          p={8}
          spacing={8}
          alignItems="flex-start"
          bg="primary.600"
        >
          <HStack>
            <Center h="100px">
              <Heading color={["primary.400"]} m={0}>
                Form coming soon
              </Heading>
            </Center>
          </HStack>
          <Text color={["primary.400"]}>
            {" "}
            This page is under construction...
          </Text>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Contact;
