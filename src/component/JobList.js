import React, { useState } from 'react';
import "./style.css";
import ApplyPage from './apply'; // Import the ApplyPage component

const JobList = ({ jobList }) => {
  const [showApplyPage, setShowApplyPage] = useState(false); // State to control showing the ApplyPage

  const handleApplyClick = () => {
    setShowApplyPage(true);
  };

  return (
    <div className="job-listing">
      {jobList.map((job) => (
        <div key={job.id} className="job-card">
          <h3 style={{textAlign:"center"}}>{job.title}</h3>
          <p style={{textAlign:"center"}}>{job.full}</p>
          <p className='requirements'>
            <ul>
                {job.requirements.map((requirement,index)=>(
                    <li key={index}>{requirement}</li>
                ))}
            </ul>
          </p>
          {/* Attach the click handler to the "Apply" button */}
          <button onClick={handleApplyClick}>Apply</button>
        </div>
      ))}
      {showApplyPage && <div className="apply-page-container">
        <div className="apply-page-bg"><ApplyPage /></div>
        
      </div>}
    </div>
  );
};

export default JobList;
