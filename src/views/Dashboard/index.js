// Chakra imports
import { Grid, Flex, Box, Img, Stack, Text } from "@chakra-ui/react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React from "react";
import { dashboardContent } from "assets/json/DashboardCards";
import CardHeader from "components/Card/CardHeader";

export default function Dashboard() {
  return (
    <Box
      bg="white"
      mt={{ base: "40px", md: "65px" }}
      p="15px"
      h="80vh"
      borderRadius="15px"
    >
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
        gap={{ base: "20px", md: "5px" }}
      >
        {dashboardContent.map((item, index) => (
          <Card
            w="100%"
            h="100%"
            key={index}
            m={{ base: "10px", md: "10px", lg: "0" }}
            boxShadow="md"
          >
            <CardHeader
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Flex>
                <Img src={item.imgUrl} w="52px" h="52px" />
              </Flex>
            </CardHeader>
            <CardBody
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Stack mt="6" spacing="3">
                <Text size="md">{item.imgName}</Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Box>
  );
}
