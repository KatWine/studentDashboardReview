/* eslint-disable react/prop-types */
import './cohortlistitem.scss';
import studentData from '../../data/data.json';
const CohortListItem = ({ cohort, setCohort, setCurrentCohort }) => {
  
  const handleCohortSelect = (cohort) => {
    setCohort(cohort)
    if (cohort === 'All Students') {
      setCurrentCohort(studentData);   
    } else {
      setCurrentCohort(studentData.filter(student => student.cohort.cohortCode === cohort.replace(' ', '')))
    }
  } 
  
  return (
    <li onClick={() => handleCohortSelect(cohort)} className='cohort-list__item'>{cohort}</li>
  )
}

export default CohortListItem