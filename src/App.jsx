import React from 'react'
import Navbar from './components/Navbar/Navbar'
import CohortList from './components/CohortList/CohortList'
import StudentList from './components/StudentList/StudentList'
import './styles/app.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar/> 
      <CohortList/>
      <StudentList/>
    </div>
  )
}

export default App