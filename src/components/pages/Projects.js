import { Heading, Container, Flex, VStack, SimpleGrid } from "@chakra-ui/react";
import ProjectUnit from "../ProjectUnit";
import { ProjectPosts }  from "../../content/ProjectPosts"
import { useState } from "react";


const Projects = () => {
  const projectUnitMap = ProjectPosts.map((project) => {
    return <ProjectUnit 
    title={project.title}
    image={project.img}
    date={project.date} 
    stack={project.stack}
    tags={project.tags}
    description={project.description}
    gh_url={project.gh_url}
    deploy_url={project.deploy_url}
    />
    
  })
  return (
    <>
      <Container maxWidth="container.xl" bg={["primary.600"]} padding={0}>
        <Flex direction="row" justifyContent="space-evenly" flexWrap="wrap">
          {projectUnitMap}
        </Flex>
      </Container>
    </>
  );
};

export default Projects;
