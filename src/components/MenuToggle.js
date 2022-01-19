import { Box } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  );
};

export default MenuToggle;
// The MenuToggle component takes two inherited props, toggle, and isOpen (state).
// If The Box is Open, render the X, otherwise Show the Menu
