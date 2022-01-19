import { Heading, Container, Flex, VStack, SimpleGrid } from "@chakra-ui/react";
import ProjectUnit from "../ProjectUnit";
const Projects = () => {
  return (
    <>
      <Container maxWidth="container.xl" bg={["primary.600"]} padding={0}>
        <Flex direction="row" justifyContent="space-evenly" flexWrap="wrap">
          <ProjectUnit />
          <ProjectUnit />
          <ProjectUnit />
          <ProjectUnit />
          <ProjectUnit />
        </Flex>
      </Container>
    </>
  );
};

export default Projects;
