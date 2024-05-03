/* eslint-disable react/prop-types */
import { useState } from "react";
import StudentListInfo from './subcomponents/StudentListInfo';
import StudentListPortfolio from './subcomponents/StudentListPortfolio';
import StudentListNotes from './subcomponents/StudentListNotes';

const StudentListItem = ({ student }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <> 
      <StudentListInfo student={student} showMore={showMore} setShowMore={setShowMore}/>
      {showMore && (
        <>
          <StudentListPortfolio student={student}/>
          <StudentListNotes/>
        </>
      )}
    </>
  )
}

export default StudentListItem