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
              <Heading color={["primary.400"]} m={0} >2022-01-19</Heading>
            </Center>
          </HStack>
            <Text color={["primary.400"]}>> I'm a full stack software developer specializing in human centered web applications and community infrastructure application prototypes. Currently, I'm focused on building projects, skilling up and <Link color={["primary.500"]}href="mailto:goro-dev@gmail.com" isExternal>working for you</Link>.</Text>


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

