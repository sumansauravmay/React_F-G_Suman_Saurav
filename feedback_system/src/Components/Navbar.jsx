import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import {
  Box,
  Heading,
  Flex,
  Avatar,
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  useToast,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const toast = useToast();

  return (
    <>
      <Box
        // bg={useColorModeValue('gray.100', 'gray.900')}
        px={4}
        // width={{lg:1530, md:1000, sm:850, base: 700}}
      >
        <Flex h={16} justifyContent={"space-around"}>
          <Text w={"120px"} cursor={"pointer"} mt={5} fontWeight={"bolder"}>
            Aromic Bar
          </Text>

          <Text w={"120px"} cursor={"pointer"} mt={5}
          _hover={{
            color:"blue"
          }}
          >
            <Link to="/">Feedback Form</Link>
          </Text>

          <Text w={"120px"} cursor={"pointer"} mt={5}
          _hover={{
            color:"blue"
          }}
          >
            <Link to="/submisssion">All submission</Link>
          </Text>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              {/* <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                      size={'sm'}
                      src={'https://avatars.githubusercontent.com/u/101393663?v=4'}
                    />
                  </MenuButton>
                 
                </Menu> */}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
