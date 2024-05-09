import { Checkbox, Flex, Text } from "@chakra-ui/react";

const SliderComp = () => {
  return (
    <Flex
      width="223px"
      height="60px"
      backgroundColor="#d0d0d0"
      borderRadius="30px"
      alignItems="center"
      justifyContent="space-around"
      color="black"
      overflow="hidden"
    >
      <Checkbox id="checkbox_toggle" className="check" display="none" />
      <Flex
        className="slide"
        as="label"
        htmlFor="checkbox_toggle"
        width="230px"
        height="60px"
        alignItems="center"
        justifyContent="space-around"
        cursor="pointer"
        _checked={{
          backgroundColor: "#0a1929",
          color: "#fff",
        }}
      >
        <Text
          className="text"
          fontSize="16px"
          fontWeight="700"
          cursor="pointer"
        >
          Day
        </Text>
        <Text
          className="text"
          fontSize="16px"
          fontWeight="700"
          cursor="pointer"
        >
          Night
        </Text>
      </Flex>
      <Flex
        className="toggle"
        htmlFor="checkbox_toggle"
        width="100px"
        height="50px"
        borderRadius="30px"
        cursor="pointer"
        background="linear-gradient(40deg, #FF0080,#FF8C00 70%)"
        transition="0.4s"
        boxShadow="0px 0px 3px rgb(255, 255, 20), 0px 0px 5px rgb(255, 255, 20)"
        _checked={{
          transform: "translateX(113px)",
          background: "linear-gradient(40deg, #8983F7, #A3DAFB 70%)",
          boxShadow: "-0px -0px 10px #8983F7, -0px -0px 3px #8983F7",
        }}
      ></Flex>
    </Flex>
  );
};

export default SliderComp;
