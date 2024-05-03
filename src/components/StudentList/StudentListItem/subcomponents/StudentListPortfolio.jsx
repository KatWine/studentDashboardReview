/* eslint-disable react/prop-types */
import React from 'react';
import './studentportfolio.scss';

const StudentListPortfolio = ({ student }) => {
  const percentOfGoal = Math.floor((student.codewars.current.total / student.codewars.goal.total) * 100)

  return (
    <section className="student-list__portfolio">
    <div className="student-list__codewars">
        <h3> Codewars</h3>
        <p> <span>Current Total:</span> {student.codewars.current.total}</p>
        <p> <span>Last Week:</span> {student.codewars.current.lastWeek}</p>
        <p> <span>Goal:</span> {student.codewars.goal.total}</p>
        <p> <span>Percentage Of Goal Achieved:</span> {percentOfGoal > 100 ? 100 : percentOfGoal}%</p>
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