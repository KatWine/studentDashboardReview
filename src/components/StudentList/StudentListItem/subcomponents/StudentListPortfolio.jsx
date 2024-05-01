import React from 'react';
import './studentportfolio.scss';

const StudentListPortfolio = () => {
  return (
    <section className="student-list__portfolio">
    <div className="student-list__codewars">
        <h3> Codewars</h3>
        <p> <span>Current Total:</span> 1804</p>
        <p> <span>Last Week:</span> 144</p>
        <p> <span>Goal:</span> 850</p>
        <p> <span>Percentage Of Goal Achieved:</span> 212%</p>
    </div>
    <div className="student-list__scores">
        <h3> Scores</h3>
        <p> <span>Assignments:</span>  71%</p>
        <p> <span>Projects: </span>  70%</p>
        <p> <span>Assessments: </span>  66%</p>
    </div>
    <div className="student-list__certifications">
        <h3> Certifications</h3>
        <p> <span>Resume: </span> &#10003; </p>
        <p> <span>Linkedin:</span> &#10007;  </p>
        <p> <span>Mock Interview:</span>  x</p>
        <p> <span>Github: </span>  x</p>
    </div>
</section>
  )
}

export default StudentListPortfolio