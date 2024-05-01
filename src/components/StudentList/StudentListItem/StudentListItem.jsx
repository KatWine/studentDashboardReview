import React from 'react';
import StudentListInfo from './subcomponents/StudentListInfo';
import StudentListPortfolio from './subcomponents/StudentListPortfolio';
import StudentListNotes from './subcomponents/StudentListNotes';

const StudentListItem = () => {
  return (
    <> 
      <StudentListInfo/>
      <StudentListPortfolio/>
      <StudentListNotes/>
    </>
  )
}

export default StudentListItem