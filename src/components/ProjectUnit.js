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
} from "@chakra-ui/react";

const ProjectUnit = () => {
  return (
    <Center py={3}>
      <Flex direction="column" maxW={"480px"}>
        <Flex border="1px" borderColor={["primary.400"]}>
          <Text as="i" fontWeight="bold" p={3} color={["primary.400"]}>
            Project 1
          </Text>
        </Flex>
        <AspectRatio maxW="480px" ratio={16 / 9}>
          <Image
            src="https://bit.ly/naruto-sage"
            alt="naruto"
            objectFit="cover"
          />
        </AspectRatio>
        <Flex
          alignItems="stretch"
          borderColor={["primary.400"]}
          direction="column"
        >
          <Flex>
            <Flex border="1px" borderColor={["primary.400"]}>
              <Text p={3} color={["primary.400"]} fontSize="xs">
                2022-01-15
              </Text>
            </Flex>
            <Flex border="1px" flex={1} borderColor={["primary.400"]}>
              <Text p={3} color={["primary.400"]} fontSize="xs">
                Stack: Mongo, Express, React, Node.js
              </Text>
            </Flex>
            <Flex border="1px" borderColor={["primary.400"]}>
              <Text p={3} color={["primary.400"]} fontSize="xs">
                #JS #UI
              </Text>
            </Flex>
          </Flex>

          <Flex>
            <Flex flex="1" border="1px" w="100%" borderColor={["primary.400"]}>
              <Text color={["primary.400"]} p={3} fontSize="xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                suscipit sodales rhoncus. Nulla dolor odio, dignissim eu
                ultrices ac, mattis ac nisi. Nam fermentum ullamcorper magna a
                laoreet. Etiam quam mi, pharetra ac lacus sit amet, volutpat
                euismod justo. Nulla tempus fringilla odio sed dapibus. Proin
                dignissim vulputate sapien at bibendum. Praesent ac vestibulum
                lorem. Fusce quam neque, interdum sed consectetur auctor,
                interdum vitae turpis. Nulla imperdiet enim ut mi bibendum
                suscipit. Pellentesque vel rhoncus leo. Fusce ac ullamcorper
                nulla. Proin porttitor dictum felis, non gravida dui.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Center>
  );
};

export default ProjectUnit;
