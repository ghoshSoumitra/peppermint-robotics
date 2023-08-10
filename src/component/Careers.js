import React from 'react';
import Header from './Header';
import JobList from './JobList';
import "./style.css";
const jobs = [
  {
    id: 1,
    title: 'SDE II',
    full: 'Software Development Engineer II',
    requirements:[
'Python, API, MongoDB.',
'Dockers, Flutter.',
'Mobile/Web App Development'
    ] ,
  },
  {
    id: 2,
    title: 'RE - I (PERCEPTION)',
    full: 'Robotics Engineer I',
    requirements:[
'C++, ROS1/ROS2.',
'SLAM, OpenCV.',
'CUDA, Pytorch.',
'TensorFlow, Navigation'
    ] ,
  },
  {
    id: 3,
    title: 'SCE I',
    full: 'Supply Chain Engineer',
    requirements:[
'Lean Six Sigma.',
'Supply chain management.',
'Inventory',
'JIT'
    ] ,
  },
 
];

const CareersPage = () => {
  return (
    <div className="careers-page">
           <Header />
        <div className='image'>
            <div className='content'>    
      <h1>About Peppermint</h1>
      <p>Peppermint is an award-winning robotics company, supported by SINE IIT-Bombay and Qualcomm
        . Peppermint develops and deploys Industrial and Enterprise robots and platforms for mobility-led services.
         The Engineering team has 50+ years of experience in building deep-tech and robotics products.
         Robots built on the Peppermint Platform are deployed across 13 cities in 4 countries!</p>
         </div>
        </div>
         <hr/>
         <h4 className='hiring'>We are Hiring!!</h4>
         <h2>
            Current Openings
         </h2>
      <JobList jobList={jobs} />
      <p style={{textAlign:"center"}}>“If you are excited about the prospect of building awesome tech and robots, we’d love to hear from you”. Please email us at hr@getpeppermint.co</p>
    </div>
  );
};

export default CareersPage;
