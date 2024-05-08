// Chakra Icons
import { BellIcon, QuestionIcon, SearchIcon } from "@chakra-ui/icons";
// Chakra Imports
import {
  Box,
  Button,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// Custom Icons
import { ProfileIcon, SettingsIcon, BellIcons } from "components/Icons/Icons";
// Custom Components
import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderLinks(props) {
  const { variant, children, fixed, secondary, onOpen, ...rest } = props;

  // Chakra Color Mode
  let navbarIcon = useColorModeValue("gray.500", "gray.200");
  let questionIcon = useColorModeValue("gray.100", "gray.100");
  let display = "flex";
  let justifyContent = "center";
  let alignItems = "center;";

  if (secondary) {
    navbarIcon = "white";
    mainText = "white";
  }
  const settingsRef = React.useRef();
  return (
    <Flex
      pe={{ sm: "0px", md: "16px" }}
      w={{ sm: "100%", md: "auto" }}
      alignItems="center"
      flexDirection="row"
      px="10px"
    >
      <Box
        display={display}
        justifyContent={justifyContent}
        alignItems={alignItems}
        borderRadius="full"
        bg="#f2f4f7"
        color="white"
        width={7}
        height={7}
        mr={2}
      >
        <BellIcons w="60px" H="48px"/>
      </Box>

      <Box
        display={display}
        justifyContent={justifyContent}
        alignItems={alignItems}
        borderRadius="full"
        bg="#f2f4f7"
        color={questionIcon}
        width={7}
        height={7}
      >
        <QuestionIcon color="grey" w="42PX" H="52PX" />
      </Box>

      <NavLink to="/auth/signin">
        <Button
          ms="0px"
          px="0px"
          me={{ sm: "2px", md: "16px" }}
          color={navbarIcon}
          variant="transparent-with-icon"
          rightIcon={
            document.documentElement.dir ? (
              ""
            ) : (
              <ProfileIcon color={navbarIcon} w="22px" h="22px" me="0px" />
            )
          }
          leftIcon={
            document.documentElement.dir ? (
              <ProfileIcon color={navbarIcon} w="22px" h="22px" me="0px" />
            ) : (
              ""
            )
          }
        ></Button>
      </NavLink>
    </Flex>
  );
}

HeaderLinks.propTypes = {
  variant: PropTypes.string,
  fixed: PropTypes.bool,
  secondary: PropTypes.bool,
  onOpen: PropTypes.func,
};
