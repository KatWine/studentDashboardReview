import { useState } from 'react';
import Navbar from './components/Navbar/Navbar'
import CohortList from './components/CohortList/CohortList'
import StudentList from './components/StudentList/StudentList'
import studentData from './data/data.json'
import './styles/app.scss'

const App = () => {
  const [cohort, setCohort] = useState('All Students');
  const [currentCohort, setCurrentCohort] = useState(studentData);

  return (
    <div className='app'>
      <Navbar/> 
      <CohortList setCurrentCohort={setCurrentCohort} setCohort={setCohort}/>
      <StudentList currentCohort={currentCohort} cohort={cohort}/>
    </div>
  )
}

export default App