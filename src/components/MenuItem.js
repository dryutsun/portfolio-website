import { Link, Text } from "@chakra-ui/react";

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Text display="block" {...rest}>
      {children}{" "}
    </Text>
  );
};

export default MenuItem;
