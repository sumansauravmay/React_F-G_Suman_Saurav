import React from 'react';
import {Route, Routes} from "react-router-dom";
import Feedback from './Feddback';
import SubmissionList from './Submission/SubmissionList';

const Allroutes = () => {
  return (
    <div>
      <Routes>
<Route path="/" element={<Feedback/>}></Route>
<Route path="/submisssion" element={<SubmissionList/>}></Route>
      </Routes>
    </div>
  )
}

export default Allroutes
