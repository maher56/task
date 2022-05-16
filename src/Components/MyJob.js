import React , { useState } from 'react'
import PopUp from './PopUp';
export default function MyJob({currentJob,setAvailableJobs}) {
    const {company , applicants , houres , sity , id , logo} = currentJob;
    const [isOpen , setIsOpen ] = useState(false);
    return (
        <React.Fragment>
            <div onClick={()=>setIsOpen(true)} data-toggle="modal"data-target="#Modal" className="cursor-pointer border border-dark fw-bold text-center d-flex justify-content-between flex-column flex-sm-row align-items-center job bg-light p-3 text-decoration-none text-black">
                <div><img src={logo} className="img-fluid" alt="the company logo"  /></div>
                <div>
                    <div>Company name: <span className="text-primary">{company}</span></div>
                    <div>Number of Vacancies: <span className="text-primary">{applicants.length}</span></div>
                </div>
                <div>
                    <div>Work houres: <span className="text-primary">{houres}</span></div>
                    <div>Sity place: <span className="text-primary">{sity}</span></div>
                </div>
            </div>
            <PopUp applicants={applicants} isOpen={isOpen} id={id} setIsOpen={setIsOpen} setAvailableJobs={setAvailableJobs}/>
        </React.Fragment>
    )
}