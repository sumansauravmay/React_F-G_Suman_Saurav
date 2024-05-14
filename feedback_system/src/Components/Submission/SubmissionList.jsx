import React from "react";
import "./Submission.css";
import {
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  Box,
  Button,
  Container,
} from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const SubmissionList = () => {
  const [searchitem, setSearchitem] = React.useState("");

  let arr = JSON.parse(localStorage.getItem("feedback")) || [];

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div>
      <Flex justifyContent={"space-evenly"} mt={50}>
        <Stack direction={"column"}>
          <Heading>Aromatic Bar</Heading>
          <Text>{arr.length} records founds.</Text>
        </Stack>

        <Stack direction={"row"}>
          <Box>
            <Input
              border="1px solid gray"
              htmlSize={4}
              width={{ lg: "200px", md: "auto", sm: "auto", base: "auto" }}
              placeholder="Search by name"
              onChange={(e) => setSearchitem(e.target.value)}
            />
          </Box>
          <Box
            border="1px solid gray"
            height={10}
            width={10}
            onClick={handleRefresh}
          >
            <RepeatIcon marginLeft={3} marginTop={2} />
          </Box>

          <Box>
            <Link to="/">
              <Button
                bg={"#48A44C"}
                color={"white"}
                _hover={{
                  background: "red",
                }}
              >
                Add New
              </Button>
            </Link>
          </Box>
        </Stack>
      </Flex>

      <main style={{ marginTop: "100px" }}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>
                Please rate the quality of the service you received from your
                host.
              </th>
              <th>Please rate the quality of your beverage.</th>
              <th> Was our restaurant clean?</th>
              <th>Please rate your overall dining experience.</th>
              <th>Delete</th>
            </tr>
          </thead>

          {arr.length > 0 ? (
            arr
              .filter((item) => {
                if (searchitem === "All") {
                  return item;
                } else if (
                  item.name.toLowerCase().includes(searchitem.toLowerCase())
                ) {
                  return item;
                }
              })
              .map((feedback) => (
                <tbody>
                  <tr key={feedback.email}>
                    <td>{feedback.name}</td>
                    <td>{feedback.email}</td>
                    <td>{feedback.phone}</td>
                    <td>{feedback.service}</td>
                    <td>{feedback.beverage}</td>
                    <td>{feedback.clean}</td>
                    <td>{feedback.experience}</td>
                    <td style={{ background: "red", color: "white" }}>
                      Delete
                    </td>
                  </tr>
                </tbody>
              ))
          ) : (
            <Text>No Feedback Submission Found!</Text>
          )}
        </table>
      </main>
    </div>
  );
};

export default SubmissionList;
