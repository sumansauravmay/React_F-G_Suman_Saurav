import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import {
  Box,
  Flex,
  Button,
  Text,
  Stack,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const toast = useToast();

  return (
    <>
      <Box px={4}>
        <Flex h={16} justifyContent={"space-around"}>
          <Text w={"120px"} cursor={"pointer"} mt={5} fontWeight={"bolder"}>
            Aromic Bar
          </Text>

          <Text
            w={"120px"}
            cursor={"pointer"}
            mt={5}
            _hover={{
              color: "blue",
            }}
          >
            <Link to="/">F&G Form</Link>
          </Text>

          <Text
            w={"120px"}
            cursor={"pointer"}
            mt={5}
            _hover={{
              color: "blue",
            }}
          >
            <Link to="/submisssion">All Submission</Link>
          </Text>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
