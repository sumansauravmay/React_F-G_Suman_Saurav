import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { useState } from "react";
import React from "react";

export default function Feedback() {
  const [value, setValue] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [value3, setValue3] = React.useState("");
  const [value4, setValue4] = React.useState("");
  
  const [inputData, setInputData] = useState({});

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  //   let arr = localStorage.getItem("feedback") || [];

  const onSubmitFunc = () => {
    console.log(inputData);

    // if (
    //   inputData.name.length > 0 &&
    //   inputData.email.length > 0 &&
    //   inputData.phone.length > 0 &&
    //   inputData.service.length > 0 &&
    //   inputData.experience.length > 0 &&
    //   inputData.clean.length > 0 &&
    //   inputData.beverage.length > 0
    // ) {
    //   console.log(
    //     inputData.name,
    //     inputData.email,
    //     inputData.phone,
    //     inputData.service,
    //     inputData.experience,
    //     inputData.clean,
    //     inputData.beverage
    //   );
    // } else {
    //   console.log("something went wrong");
    //   alert("Hi");
    // }

  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Aromatic Bar
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            We are committed to providing you with the best dining experience
            possible, so we welcome your comments. Please fill out this
            questionnaire. Thank you
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <FormControl id="name" isRequired>
                <FormLabel>Customer Name</FormLabel>
                <Input type="text" onChange={handleChange} name="name" />
              </FormControl>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" onChange={handleChange} name="email" />
            </FormControl>
            <FormControl id="phone" isRequired>
              <FormLabel>Phone</FormLabel>
              <InputGroup>
                <Input type="number" onChange={handleChange} name="phone" />
              </InputGroup>
            </FormControl>

            <FormControl id="service" isRequired>
              <FormLabel>
                {" "}
                1. Please rate the quality of the service you received from your
                host.
              </FormLabel>
              <RadioGroup onChange={setValue} value={value}>
                <Stack direction="column">
                  <Radio
                    value="Excellent"
                    onChange={handleChange}
                    name="service"
                  >
                    Excellent
                  </Radio>
                  <Radio value="good" onChange={handleChange} name="service">
                    good
                  </Radio>
                  <Radio value="fair" onChange={handleChange} name="service">
                    fair
                  </Radio>
                  <Radio value="bad" onChange={handleChange} name="service">
                    bad
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            <FormControl id="beverage" isRequired>
              <FormLabel>
                {" "}
                2. Please rate the quality of your beverage.
              </FormLabel>
              <RadioGroup onChange={setValue2} value={value2}>
                <Stack direction="column">
                  <Radio
                    value="Excellent"
                    onChange={handleChange}
                    name="beverage"
                  >
                    Excellent
                  </Radio>
                  <Radio value="good" onChange={handleChange} name="beverage">
                    good
                  </Radio>
                  <Radio value="fair" onChange={handleChange} name="beverage">
                    fair
                  </Radio>
                  <Radio value="bad" onChange={handleChange} name="beverage">
                    bad
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            <FormControl id="clean" isRequired>
              <FormLabel> 3. Was our restaurant clean?</FormLabel>
              <RadioGroup onChange={setValue3} value={value3}>
                <Stack direction="column">
                  <Radio value="Excellent" onChange={handleChange} name="clean">
                    Excellent
                  </Radio>
                  <Radio value="good" onChange={handleChange} name="clean">
                    good
                  </Radio>
                  <Radio value="fair" onChange={handleChange} name="clean">
                    fair
                  </Radio>
                  <Radio value="bad" onChange={handleChange} name="clean">
                    bad
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            <FormControl id="experience" isRequired>
              <FormLabel>
                {" "}
                4. Please rate your overall dining experience.
              </FormLabel>
              <RadioGroup onChange={setValue4} value={value4}>
                <Stack direction="column">
                  <Radio
                    value="Excellent"
                    onChange={handleChange}
                    name="experience"
                  >
                    Excellent
                  </Radio>
                  <Radio value="good" onChange={handleChange} name="experience">
                    good
                  </Radio>
                  <Radio value="fair" onChange={handleChange} name="experience">
                    fair
                  </Radio>
                  <Radio value="bad" onChange={handleChange} name="experience">
                    bad
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={onSubmitFunc}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
