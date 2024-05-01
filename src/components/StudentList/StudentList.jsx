import React from 'react';
import './studentlist.scss';
import StudentListItem from './StudentListItem/StudentListItem';

const StudentList = () => {
  return (
    <main className="student-list">
        <h3> Winter 2026</h3>
        <p> Total Students: <span>250</span></p>
        <ul className="student-list__item">
          <li> <StudentListItem/> </li>
        </ul>
        
    </main>
  )
}

export default StudentList