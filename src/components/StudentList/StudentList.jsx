// StudentList.jsx
import React from 'react';
import './studentlist.scss';
import StudentListItem from './StudentListItem/StudentListItem';

const StudentList = ({ cohort, currentCohort }) => {
  return (
    <main className='student-list'>
      <h3>{cohort}</h3>
      <p>Total Students: <span>{currentCohort.length}</span></p>
      <ul className='student-list__item'>
        {currentCohort.map((student) => (
          <li key={student.id}><StudentListItem student={student} /></li>
        ))}
      </ul>
    </main>
  );
}

export default StudentList;
