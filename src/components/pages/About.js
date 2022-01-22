import {
  chakra,
  List,
  ListItem,
  ListIcon,
  Center,
  Divider,
  Text,
  Heading,
  Container,
  VStack,
  Flex,
  Link,
  useMediaQuery,
} from "@chakra-ui/react";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiPostgresql } from "react-icons/si";

const About = () => {
  const [isSmallScreen] = useMediaQuery("(max-width: 500px)");
  console.log(isSmallScreen);
  return (
    <Container maxWidth="container.xl" padding={0}>
      <Flex h="100vh" py={0}>
        <VStack
          w="full"
          h="full"
          p={8}
          spacing={8}
          alignItems="flex-start"
          bg="primary.600"
        >
          <Text color={["primary.400"]}>Hi! I'm Goro. </Text>
          <Heading color={["primary.400"]} m={0}>
            I like building things.
          </Heading>
          <Text color={["primary.400"]}>
            > I'm a full stack software developer looking to specialize in community centered
            web applications. Currently, I'm focused on building projects, skilling up
            and{" "}
            <Link
              color={["primary.500"]}
              href="mailto:goro-dev@gmail.com"
              isExternal
            >
              working for you
            </Link>
            .
          </Text>
        </VStack>

        <Center height="50vh">
          <Divider orientation="vertical" />
        </Center>

        <VStack
          w="50%"
          h="full"
          p={8}
          spacing={8}
          alignItems="flex-start"
          bg="primary.600"
        >
          <Heading color={["primary.400"]} fontSize="xl" p={3} bg={["primary.100"]}>
            Technologies I've been using:
          </Heading>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={IoLogoJavascript} bg="yellow.100" md="in" p={2} w={8} h={8}  borderRadius="100%"/>
              <Text color={["primary.400"]}>
                > ES6+ Javascript along with JSX, EJS and other syntax
                extensions and templating languages.
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={FaReact} bg="#61dbfb" md="in" p={2} w={8} h={8} borderRadius="100%" />
              <Text color={["primary.400"]}>
                > React 16 with functional and class components. Currently
                building projects in Next.js.{" "}
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={FaNodeJs} bg="#68a063" md="in" p={2} w={8} h={8} borderRadius="100%"/>
              <ListIcon as={SiExpress} bg="#61dbfb" md="in" p={2} w={8} h={8} borderRadius="100%" />
              <Text color={["primary.400"]}>
                > Node.js + Express to handle routing, sessions, controller
                logic, API development, and views.{" "}
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={SiMongodb} bg="#3FA037" md="in" p={2} w={8} h={8} borderRadius="100%" />
              <ListIcon as={SiPostgresql} bg="#0064a5" md="in" p={2} w={8} h={8} borderRadius="100%" />
              <Text color={["primary.400"]}>
                > MongoDB or Postgres backend depending on the requirements of my applications. {" "}
              </Text>
            </ListItem>
          </List>
        </VStack>
      </Flex>
    </Container>
  );
};

export default About;
