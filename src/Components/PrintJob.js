import React from 'react'
import { Link } from 'react-router-dom';
export default function PrintJob({currentJob}) {
    const {company , job , houres , sity , id , logo} = currentJob;
    function hanlde() {
        window.localStorage.setItem("job" , id);
    }
    return (
        <Link to="/jobtitle" onClick={() =>{hanlde()}} className="border border-dark fw-bold text-center d-flex justify-content-between flex-column flex-sm-row align-items-center job bg-light p-3 text-decoration-none text-black">
            <div><img src={logo} className="img-fluid" alt="the company logo"  /></div>
            <div>
                <div>Company name: <span className="text-primary">{company}</span></div>
                <div>Available job: <span className="text-primary">{job}</span></div>
            </div>
            <div>
                <div>Work houres: <span className="text-primary">{houres}</span></div>
                <div>Sity place: <span className="text-primary">{sity}</span></div>
            </div>
        </Link>
    )
}
