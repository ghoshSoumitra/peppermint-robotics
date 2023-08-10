import React from 'react';
import "./style.css";
const JobList = ({ jobList }) => {
  return (
    <div className="job-listing">
      {jobList.map(job => (
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
          <button>Apply</button>
        </div>
      ))}
    </div>
  );
};

export default JobList;
