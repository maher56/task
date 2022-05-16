import React , { useState } from 'react'
import { useEffect } from 'react';
import ApplicationToJob from './ApplicationToJob';
export default function JobDecription() {
    const [myJob , setMyJob] = useState({id:-1})
    let jobId = window.localStorage.getItem("job"); 
    useEffect(() => {
        JSON.parse(window.localStorage.getItem("Jobs")).forEach((currentjob) => {
            if(+currentjob.id === +jobId) {
                setMyJob(currentjob);
                return;
            }
        });
    } , [jobId])
    if(myJob.id==-1) {
        return (<h3 className="text-danger text-center mt-3">something went wrong,please try again or refresh the page</h3>)
    }else {
        const {description,company,houres,job,sity,logo} = myJob;
        return (
            <div className="container mt-3 text-center">
            <div><img src={logo} className="" alt="the company logo"  /></div>
            <div>
                <h2>Company name: <span className="text-primary">{company}</span></h2>
                <h2>Available job: <span className="text-primary">{job}</span></h2>
            </div>
            <div>
                <h3>Work houres: <span className="text-primary">{houres}</span></h3>
                <h3>Sity place: <span className="text-primary">{sity}</span></h3>
            </div>
                <p className="text-muted w-75 mx-auto">{description}</p>
                <p className="mt-3 text-warning fw-bold">if you are interested please fill this fields</p>
                <ApplicationToJob myJob={myJob}/>
            </div>
        )
    } 
}
