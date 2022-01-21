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
import { BookMarklet } from "../../content/BookMarklet";

const BookMark = () => {
  const bookmarkMap = BookMarklet.map((bookmark, index) => {
    return (
      <ListItem p={2} bg={["primary.100"]} _hover={{ bg: "primary.500" }}>
        <Link href={bookmark.link} isExternal>
            <Text as="i" fontSize="xs" color={["primary.400"]}>
            {index} {"- "}{bookmark.title}
        </Text>
        </Link>
      </ListItem>
    );
  });

  return (
    <VStack
      w="30%"
      h="full"
      p={8}
      spacing={8}
      alignItems="flex-start"
      bg="primary.600"
    >
      <Heading color={["primary.400"]} bg={"primary.200"} fontSize="l" p={2}>
        {" "}
        BOOKMARKS:{" "}
      </Heading>
      <List spacing={6}>{bookmarkMap}</List>
    </VStack>
  );
};

export default BookMark;
