/* eslint-disable react/prop-types */
import './studentlistinfo.scss';
import img from './../../../../assets/imgs/dashboardImg.png';

const StudentListInfo = ({ student, showMore, setShowMore }) => {
  return (
    <section className="student-list__info">
    <div className="student-list__img">
        <img src={student.profilePhoto} alt={`Photo of ${student.names.preferredName} ${student.names.surname}`} />
    </div>
    <div className="student-list__details">
        <h3>{student.names.preferredName} {student.names.middleName[0]}. {student.names.surname}</h3>
        <p>{student.username}</p>
        <p> <span>Birthday:</span> {student.dob}</p>
        <button onClick={() => setShowMore(!showMore)}> Show {showMore ? 'Less' : 'More'}...</button>
    </div>
    <div className="student-list__ontrack">
        <p> On Track To Graduate</p>
    </div>
</section>
  )
}

export default StudentListInfo