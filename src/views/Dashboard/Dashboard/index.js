// Chakra imports
import { Box, Flex, Stat, StatLabel, useColorModeValue } from "@chakra-ui/react";

// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import IconBox from "components/Icons/IconBox";
import React from "react";
import MiniStatistics from "./components/MiniStatistics";

export default function Dashboard() {
  let iconBoxInside = useColorModeValue("white");

  return (
    <Box
      bg="white"
      mt={{ base: "40px", md: "65px" }}
      p="10px"
      h="80vh"
      borderRadius="15px"
    >
      <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
        <Card minH="83px">
          <CardBody>
            <Flex flexDirection="row" align="center" justify="center" w="100%">
              <Stat me="auto">
                <StatLabel
                  fontSize="sm"
                  color="gray.400"
                  fontWeight="bold"
                  pb=".1rem"
                >
                  {title}
                </StatLabel>
                <Flex>
                  <StatNumber fontSize="lg" color={textColor}>
                    {amount}
                  </StatNumber>
                  <StatHelpText
                    alignSelf="flex-end"
                    justifySelf="flex-end"
                    m="0px"
                    color={percentage > 0 ? "green.400" : "red.400"}
                    fontWeight="bold"
                    ps="3px"
                    fontSize="md"
                  >
                    {percentage > 0 ? `+${percentage}%` : `${percentage}%`}
                  </StatHelpText>
                </Flex>
              </Stat>
              <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal}>
                {icon}
              </IconBox>
            </Flex>
          </CardBody>
        </Card>
      </Flex>
    </Box>
  );
}
