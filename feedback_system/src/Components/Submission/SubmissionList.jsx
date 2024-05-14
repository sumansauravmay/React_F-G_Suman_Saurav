import React from "react";
import "./Submission.css";
import { Heading, Text } from "@chakra-ui/react";

const SubmissionList = () => {
  let arr = JSON.parse(localStorage.getItem("feedback")) || [];




  return (
    <div>
      <main>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Quality Of Service</th>
              <th>Quality Of Beverage</th>
              <th>Restaurant Clean</th>
              <th>Dining Experience</th>
            </tr>
          </thead>
          {/* <tbody> */}
            {arr.length>0?arr.map((feedback) => (
              <tbody>
              <tr key={feedback.name}>
                <td>{feedback.name}</td>
                <td>{feedback.email}</td>
                <td>{feedback.phone}</td>
                <td>{feedback.service}</td>
                <td>{feedback.beverage}</td>
                <td>{feedback.clean}</td>
                <td>{feedback.experience}</td>
              </tr>
              </tbody>
            )):<Text>No Feedback Submission Found!</Text>}
         
        </table>
      </main>
    </div>
  );
};

export default SubmissionList;
