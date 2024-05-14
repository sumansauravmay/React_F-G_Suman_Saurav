import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  Stack,
  Grid,
  Button,
  Heading,
  Text,
  InputLeftAddon,
  useColorModeValue,
} from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";
import { IoIosArrowDown } from "react-icons/io";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react';
import { useState } from "react";
import React from "react";
import Success from "./Successful";

export default function Feedback() {
  const [value, setValue] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [value3, setValue3] = React.useState("");
  const [value4, setValue4] = React.useState("");
  const [inputData, setInputData] = useState({});
  const toast = useToast()

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

    let arr = JSON.parse(localStorage.getItem("feedback")) || [];

  const onSubmitFunc = () => {
    console.log(inputData);
    arr.push(inputData);
    localStorage.setItem("feedback", JSON.stringify(arr));

    toast({
          position: 'top',
          title: 'Thank you for providing the feedback',
          description: "We will work towards improving your experience",
          status: 'success',
          duration: 9000,
          isClosable: true,
    })





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
      minH={"130vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack
        // align={"center"}
        >
          <Text
            fontSize={"lg"}
            color={"gray.600"}
            width={{ lg: "150%", md: "100%", sm: "100%", base: "100%" }}
            textAlign={"center"}
          >
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
          width={{ lg: "1000px" }}
          marginLeft={{ lg: -40, md: -10, sm: 0, base: 0 }}
          minH={"100vh"}
        >
          <Grid
            spacing={4}
            templateColumns={{
              lg: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
              sm: "repeat(1, 1fr)",
              base: "repeat(1, 1fr)",
            }}
            gap={2}
            marginLeft={"auto"}
          >
            <HStack>
              <FormControl id="name" isRequired>
                <FormLabel>Customer Name</FormLabel>
                <Input
                  type="text"
                  onChange={handleChange}
                  name="name"
                  placeholder="E.g. John snow"
                />
              </FormControl>
            </HStack>

            <HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  onChange={handleChange}
                  name="email"
                  placeholder="E.g abc@gmail.com"
                />
              </FormControl>
            </HStack>
            <FormControl id="phone" isRequired>
              <FormLabel>Phone</FormLabel>
              <InputGroup>
                <InputLeftAddon>
                  <ReactCountryFlag countryCode="IN" svg />
                  <IoIosArrowDown />
                </InputLeftAddon>
                <Input
                  type="number"
                  placeholder="9999999999"
                  onChange={handleChange}
                  name="phone"
                />
              </InputGroup>
            </FormControl>
          </Grid>




          <Grid
            spacing={4}
            templateColumns={{
              lg: "repeat(2, 1fr)",
              md: "repeat(1, 1fr)",
              sm: "repeat(1, 1fr)",
              base: "repeat(1, 1fr)",
            }}
            gap={10}
            marginLeft={"auto"}
          >
            <FormControl id="service" isRequired mt={10}>
              <FormLabel>
                {" "}
                Please rate the quality of the service you received from your
                host.
              </FormLabel>
              <RadioGroup onChange={setValue} value={value}>
                <Stack direction="row">
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

            <FormControl id="clean" isRequired mt={10}>
              <FormLabel>Was our restaurant clean?</FormLabel>
              <RadioGroup onChange={setValue3} value={value3}>
                <Stack direction="row">
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

            <FormControl id="beverage" isRequired mt={5}>
              <FormLabel> Please rate the quality of your beverage.</FormLabel>
              <RadioGroup onChange={setValue2} value={value2}>
                <Stack direction="row">
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

            <FormControl id="experience" isRequired mt={5}>
              <FormLabel>
                {" "}
                Please rate your overall dining experience.
              </FormLabel>
              <RadioGroup onChange={setValue4} value={value4}>
                <Stack direction="row">
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
            {/* </Stack>  */}
          </Grid>

          <Stack spacing={10} pt={2}>
            <Button
              // loadingText="Submitting"
              size="lg"
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "red.500",
              }}
              onClick={onSubmitFunc}
              width={"30%"}
              marginTop={20}
              marginLeft={{lg:290, md:150, sm:130, base: 100}}
            >
              Submit
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
