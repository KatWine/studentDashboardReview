import React from 'react'
import CohortListItem from './CohortListItem';
import './cohortlist.scss';


const CohortList = () => {
  return (
    <aside className="cohort-list">
        <h3 className='cohort-list__header'> Choose a Class by Start Date</h3>
        <ul> 
            <CohortListItem/>
        </ul>
    </aside>
  )
}

export default CohortList