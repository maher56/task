import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import MyJob from './MyJob';
export default function Company() {
    const [availableJobs , setAvailableJobs] = useState(JSON.parse(window.localStorage.getItem("Jobs")));
    return (
        <div className="container">
            <div className="d-flex justify-content-end">
                <Link to="/company/newJob" className="btn btn-primary mt-3 flex-end"> New Job </Link>
            </div>
            <h3 className="text-center my-3">Your vacancies</h3>
            {availableJobs.length > 0 ?<div className="jobs" >{availableJobs.map(currentJob => {
                return <MyJob key={currentJob.id} currentJob={currentJob} setAvailableJobs={setAvailableJobs}></MyJob>
            })}</div>: <h3 className="text-danger text-center">you don't have vacancies</h3>}
        </div>
    )
}
