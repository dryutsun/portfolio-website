import { Box, Text } from "@chakra-ui/react";

const Logo = (props) => {
  return (
    <Box {...props}>
      <Text as="i" fontSize="lg" fontWeight="bold" color="primary.400">
        goro.i.i
      </Text>
    </Box>
  );
};

export default Logo;
