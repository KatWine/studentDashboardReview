// CohortList.jsx
import React from 'react';
import CohortListItem from './CohortListItem';
import './cohortlist.scss';

const CohortList = ({ setCohort, setCurrentCohort }) => {
  const cohorts = ['All Students', 'Winter 2026', 'Fall 2026', 'Summer 2026', 'Spring 2026', 'Winter 2025', 'Fall 2025', 'Summer 2025', 'Spring 2025'];

  return (
    <aside className='cohort-list'>
      <h3 className='cohort-list__header'>Choose a Class by Start Date</h3>
      <ul>
        {cohorts.map((cohort, index) => (
          <CohortListItem
            setCurrentCohort={setCurrentCohort}
            setCohort={setCohort}
            cohort={cohort}
            key={index}
          />
        ))}
      </ul>
    </aside>
  );
}

export default CohortList;
