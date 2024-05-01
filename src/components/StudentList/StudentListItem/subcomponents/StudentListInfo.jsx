import React from 'react'
import './studentlistinfo.scss';
import img from './../../../../assets/imgs/dashboardImg.png';

const StudentListInfo = () => {
  return (
    <section className="student-list__info">
    <div className="student-list__img">
        <img src={img} />
    </div>
    <div className="student-list__details">
        <h3> Israel B. Rodriguez</h3>
        <p> Israel.rodgriguez@gmail.com</p>
        <p> <span>Birthday:</span> February 3, 1979</p>
        <button> Show Less...</button>
    </div>
    <div className="student-list__ontrack">
        <p> On Track To Graduate</p>
    </div>
</section>
  )
}

export default StudentListInfo