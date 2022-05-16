import React , { useState } from 'react'
import PrintJob from './PrintJob';
import FilterJobs from './FilterJobs';
export default function Applicant({availableJobs}) {
    const [currentJobs , setCurrentJobs] = useState(availableJobs);
    const allJobs = availableJobs;
    return (
        <div className="mt-3 container">
            <h1 className="text-center">Available Jobs</h1>
            <FilterJobs setCurrentJobs={setCurrentJobs} allJobs={allJobs} />
            {currentJobs.length > 0 ?<div className="jobs" >{currentJobs.map(currentJob => {
                return <PrintJob key={currentJob.id} currentJob={currentJob}></PrintJob>
            })}</div>: <h3 className="text-danger text-center">no available jobs match with this requirements</h3>}
        </div>
    )
}
