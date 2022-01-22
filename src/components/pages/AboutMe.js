import {
  HStack,
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
} from "@chakra-ui/react";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import BookMark from "./BookMarks";

const AboutMe = () => {
  return (
    <Container maxWidth="container.xl" padding={0}>
      <Flex h="100vh" py={0}>
        <Center>
          <VStack
            w="80%%"
            h="full"
            p={8}
            spacing={8}
            alignItems="flex-start"
            bg="primary.600"
          >
            <HStack>
                <Heading color={["primary.400"]} m={0}>
                  About Me
                </Heading>
            </HStack>
            <Text color={["primary.400"]} fontSize={"md"}>
              {" "}
              <p className="blogtext">
                Hey There! Thanks for checking out my page. My Name is Goro.
              </p>
              <p>
                My journey as a software developer is a story of delayed
                inevitability.
              </p>
              <br/>
              <p>
                From a young age, I would spend countless hours moving around
                html elements and defining CSS properties on my personal blog
                and watching my friends build flash games with actionscript. I
                was surrounded by a world of code but I didn't register it as
                such at the time. After I left home, I could feel this pull get
                stronger and stronger -- where tasks at my office job required
                some hairy VB logic, raw SQL queries, database migrations and
                writing small scripts for some business processes. At the time,
                I thought I was progressing my career in arts administration --
                imagine my surprise when I discovered I was mutating into a
                developer!
              </p>
              <br />
              <p>
                Things came to a head during the pandemic. Three things happened:
              </p>
              <li>
                I dug into the codebase of Forensic Architecture.
              </li>
              <li>
                I kept a close eye on the many software projects that sprung up
                from COVID data trackers to TurboVax.
              </li>
              <li>
                I watched David Malan's great CS50 course.
              </li>
              <br />
              <Heading color={["primary.400"]} fontSize={"x-large"} mt={3}>
                I saw programmers were out there helping people solve difficult problems with software. I wanted to help people solve their problems <i>too</i>.
              </Heading>






            </Text>
          </VStack>
        </Center>
      </Flex>
    </Container>
  );
};

export default AboutMe;
