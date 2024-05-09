import React, { useState } from "react";
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
  InputGroup,
  InputLeftElement,
  Img,
  InputRightElement,
} from "@chakra-ui/react";
// Assets
import signInImage from "assets/img/signInImage.png";
import personImage from "assets/img/person.png";
import mailEnvelope from "assets/img/Letter.png";
import keyMinimalistic from "assets/img/KeyMinimalistic.png";
import Vector from "assets/img/Vector.png";
import { TBRLogo } from "components/Icons/Icons";

function SignIn() {
  const titleColor = useColorModeValue("#667085");
  const textColor = useColorModeValue("#101828");
  const isChecked = "false" || "true";

  const [onSwitch, setOnSwitch] = useState(false);

  return (
    <Flex>
      <Flex
        h={{ sm: "initial", md: "100ch", lg: "100vh" }}
        w="100%"
        maxW="1044px"
        mx="auto"
        justifyContent="space-between"
        // mb="30px"
        pt={{ sm: "100px", md: "0px" }}
      >
        <Flex
          alignItems="center"
          justifyContent="start"
          style={{ userSelect: "none" }}
          w={{ base: "100%", md: "50%", lg: "42%" }}
        >
          {/* Logo */}
          <Flex position="absolute" top="0">
            <TBRLogo w="20" h="20" />
          </Flex>

          <Flex
            direction="column"
            w="100%"
            background="transparent"
            p="48px"
            mt={{ md: "150px", lg: "80px" }}
          >
            <Heading
              color={titleColor}
              textAlign="center"
              fontSize="20px"
              mb="10px"
            >
              Welcome Back
            </Heading>
            <Text
              mb="36px"
              ms="4px"
              color={textColor}
              fontWeight="bold"
              fontSize="36px"
              textAlign="center"
            >
              Sign In now
            </Text>
            <FormControl display="flex" alignItems="center">
              <Switch
                colorScheme="green"
                isChecked="open"
                h="50"
                sx={{
                  ".chakra-switch__track": {
                    position: "relative",
                  },
                  ".chakra-switch__track::after": {
                    w: "50%",
                    h: "50%",
                    content: isChecked ? '"Admin"' : '"OFF"',
                    color: isChecked ? "white" : "black",
                    display: "block",
                    position: "absolute",
                    transform: "translate(-50%,-50%)",
                    top: "50%",
                    left: isChecked ? "28%" : "70%",
                    fontWeight: "bold",
                    fontSize: "2xs",
                  },
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Email
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Img src={mailEnvelope} alt="mailEnvelope" />}
                />

                <Input
                  borderRadius="15px"
                  mb="24px"
                  fontSize="sm"
                  type="text"
                  placeholder="ABC@gmail.com"
                  size="lg"
                />
              </InputGroup>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Password
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Img src={keyMinimalistic}  alt="keyMinimalistic" />}
                />

                <Input
                  borderRadius="15px"
                  mb="36px"
                  fontSize="sm"
                  type="password"
                  placeholder="*********"
                  size="lg"
                />
                <InputRightElement
        
                  pointerEvents="none"
                  children={<Img src={Vector} alt="key" /> }
                />
              </InputGroup>

              <Link href="#/admin/dashboard">
                <Button
                  fontSize="10px"
                  type="submit"
                  bg="#015A9B"
                  w="100%"
                  h="45"
                  mb="20px"
                  color="white"
                  mt="20px"
                  _hover={{
                    bg: "gray.400",
                  }}
                  _active={{
                    bg: "#015A9B",
                  }}
                >
                  SIGN IN
                </Button>
              </Link>
            </FormControl>
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxW="100%"
              mt="0px"
            ></Flex>
          </Flex>
        </Flex>

        {/* Rigth Side Image */}
        <Box
          display={{ base: "none", md: "block" }}
          overflowX="hidden"
          h="100%"
          w="50%"
          position="absolute"
          right="0px"
        >
          <Box
            bgImage={signInImage}
            w="100%"
            h="100%"
            bgSize="cover"
            bgRepeat="no-repeat"
            bgPosition="center center"
            position="absolute"
          ></Box>
          <Box
            minW="100%"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            textAlign="center"
            color="white"
            px="4"
            mt="5"
          >
            <Img
              src={personImage}
              alt="person"
              mx="auto"
              w={{ sm: "initial", lg: "60%" }}
            />
            <Text noOfLines={1} fontWeight="bold" fontSize="30px">
              InferOperate Clinical Solutions
            </Text>
            <Text color="#41AEC1" noOfLines={1} py="5px">
              Seamlessly integrated into the clinical workflow
            </Text>
            <Text noOfLines={[2, 3, 4]} fontSize="12px">
              InferOperate solution suite is our product series intended for
              disease intervention and treatment. We are developing pipeline
              products intended for thoracic surgery planning, thoracic surgery
              navigation, with an aim to facilitate precision treatment, and
              provide valuable solutions to medical institutions.
            </Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignIn;
