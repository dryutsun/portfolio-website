import { Box, Stack, Button, Link } from "@chakra-ui/react";
import MenuItem from "./MenuItem";
import { Link as RouteLink } from "react-router-dom";

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        space={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={("column", "row", "row", "row")}
        pt={[4, 4, 0, 0]}
      >
        <Link as={RouteLink} to="/">
          <MenuItem>Home</MenuItem>
        </Link>
        <Link as={RouteLink} to="/about">
          <MenuItem>About</MenuItem>
        </Link>
        <Link as={RouteLink} to="/portfolio">
          <MenuItem>Portfolio</MenuItem>
        </Link>
        <Link as={RouteLink} to="/blog">
          <MenuItem>Blog</MenuItem>
        </Link>
        <MenuItem to="/contact" isLast>
          <Button
            size="sm"
            rounded="md"
            color={["primary.500", "primary.500", "white", "white"]}
            bg={["white", "white", "primary.500", "primary.500"]}
            _hover={{
              bg: ["primary.100", "primary.100", "primary.600", "primary.600"],
            }}
          >
            Send E-mail
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  );
};

export default MenuLinks;
