import {HStack, chakra, List, ListItem, ListIcon,  Center, Divider, Text, Heading, Container, VStack, Flex, Link } from "@chakra-ui/react"
import { IoLogoJavascript } from 'react-icons/io'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiExpress } from 'react-icons/si'
import BookMark from "./BookMarks"

const Blog = () => {
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
              <Heading color={["primary.400"]} m={0} >Content Coming Soon...</Heading>
            </Center>
          </HStack>
            <Text color={["primary.400"]}> Hello! I'm just getting this website off the ground so there isn't anything here yet!</Text>


        </VStack>

        <Center height='50vh'>
          <Divider orientation='vertical' />
        </Center>
        
        <BookMark />
      </Flex>
 
    </Container>
  )

}

export default Blog

