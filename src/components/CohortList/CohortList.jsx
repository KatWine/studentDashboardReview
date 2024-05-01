import React from 'react'
import CohortListItem from './CohortListItem';
import './cohortlist.scss';


const CohortList = () => {
  const items = ['Winter 2026', 'Summer 2026', 'Spring 2026'];
  return (
    <aside className="cohort-list">
        <h3 className='cohort-list__header'> Choose a Class by Start Date</h3>
        <ul> 
          {items.map((item, index) => (<CohortListItem item={item} key={index} />))}
        </ul>
    </aside>
  )
}

export default CohortList