import React from "react";
import "./Submission.css";

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
          <tbody>
            {arr.map((feedback) => (
              <tr key={feedback.name}>
                <td>{feedback.name}</td>
                <td>{feedback.email}</td>
                <td>{feedback.phone}</td>
                <td>{feedback.service}</td>
                <td>{feedback.beverage}</td>
                <td>{feedback.clean}</td>
                <td>{feedback.experience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default SubmissionList;
