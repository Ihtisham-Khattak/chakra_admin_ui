import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import SidebarContent from "./SidebarContent";

// FUNCTIONS
function Sidebar(props) {
  // to check for active links and opened collapses
  const mainPanel = React.useRef();
  let variantChange = "0.2s linear";

  const bg = useColorModeValue("white", "white.200");
  const { routes, sidebarVariant } = props;

  // SIDEBAR
  return (
    <Box ref={mainPanel}>
      <Box display={{ sm: "none", xl: "block" }} bg={bg} position="fixed">
        <Box
          transition={variantChange}
          w="260px"
          maxW="260px"
          ms={{
            sm: "16px",
          }}
          my={{
            sm: "16px",
          }}
          h="calc(100vh - 32px)"
          ps="20px"
          pe="20px"
        >
          <SidebarContent
            routes={routes}
            display="none"
            sidebarVariant={sidebarVariant}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
