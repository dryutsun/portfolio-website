import {
  Image,
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Flex,
  VStack,
  HStack,
  AspectRatio,
  Link,
} from "@chakra-ui/react";
import parse from "html-react-parser";

const ProjectUnit = (props) => {
  let description = parse(props.description);
  return (
    <Center py={3}>
      <Flex direction="column" minW={"480px"} maxW={"480px"} minH={"500px"}>
        <Flex border="1px" borderColor={["primary.400"]}>
          <Text as="i" fontWeight="bold" p={3} color={["primary.400"]}>
            {props.title}
          </Text>
        </Flex>
        <AspectRatio
          order="1px"
          borderColor={["primary.400"]}
          maxW="480px"
          ratio={16 / 9}
        >
          <Image src={`${props.image}`} alt="naruto" objectFit="fill" />
        </AspectRatio>
        <Flex
          alignItems="stretch"
          borderColor={["primary.400"]}
          direction="column"
        >
          <Flex
            w="100%"
            alignItems="stretch"
            justifyContent="space-evenly"
            borderColor={["primary.400"]}
          >
            <Text
              borderLeft="1px"
              borderTop="1px"
              w="50%"
              as="i"
              fontWeight="light"
              p={3}
              color={["primary.400"]}
            >
              <Link
                color={["primary.500"]}
                href="mailto:goro-dev@gmail.com"
                isExternal
              >
                Github Repo
              </Link>
            </Text>

            <Text
              as="i"
              borderRight="1px"
              borderLeft="1px"
              borderTop="1px"
              w="50%"
              fontWeight="light"
              p={3}
              color={["primary.400"]}
            >
              <Link
                color={["primary.500"]}
                href="mailto:goro-dev@gmail.com"
                isExternal
              >
                Heroku Page
              </Link>
            </Text>
          </Flex>
          <Flex>
            <Flex border="1px" borderColor={["primary.400"]}>
              <Text p={3} color={["primary.400"]} fontSize="xs">
                {props.date}
              </Text>
            </Flex>
            <Flex
              border="1px"
              flex={1}
              borderColor={["primary.400"]}
              minH={"60px"}
            >
              <Text p={3} color={["primary.400"]} fontSize="xs">
                {props.stack}
              </Text>
            </Flex>
            <Flex border="1px" borderColor={["primary.400"]}>
              <Text p={3} color={["primary.400"]} fontSize="xs">
                {props.tags}
              </Text>
            </Flex>
          </Flex>

          <Flex>
            <Flex
              flex="1"
              borderLeft="1px"
              borderRight="1px"
              borderBottom="1px"
              w="100%"
              borderColor={["primary.400"]}
              minH="250px"
            >
              <Text color={["primary.400"]} p={3} fontSize="xs">
                {description}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Center>
  );
};

export default ProjectUnit;
