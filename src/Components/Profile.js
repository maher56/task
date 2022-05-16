import React from 'react'
import { Link } from 'react-router-dom';
export default function Profile() {
    const app = JSON.parse(window.localStorage.getItem("applicant"));
    const applicant = app[0] , idOfJob = app[1];
    const handleDelete = () => {
        let Jobs = JSON.parse(window.localStorage.getItem("Jobs")).map((job) => {
            if(+job.id === +idOfJob) {
                job.applicants=job.applicants.filter(cur => cur.name!=applicant.name);
            }
            return job;
        })
        window.localStorage.setItem("Jobs",JSON.stringify(Jobs));
    } 
    if(applicant === 'undefined') {
        return (<h3 className="text-danger text-center mt-3">something went wrong,please try again or refresh the page</h3>)
    }
    const {name , num , email , CV} = applicant;
    return (
        <div className='container'>
            <div className='row text-center my-4'>
                <div className='box col'>
                    <div className='mb-4'>Name: <span className='text-primary text-bold'>{name}</span></div>
                    <div>Number: <span className='text-primary text-bold'>{num}</span></div>
                </div>
                <div className='box col'>
                    <div className='mb-4'>Email: <span className='text-primary text-bold'>{email}</span></div>
                    <div>CV Link: <span className='text-primary text-bold'>{CV}</span></div>
                </div>
            </div>
            <div className='d-flex justify-content-evenly mt-5'>
                <Link to="/company" className="btn btn-success btn-lg" onClick={() => handleDelete()}>accept it</Link>
                <Link to="/company" className="btn btn-danger btn-lg" onClick={() => handleDelete()}>delete it</Link>
            </div>
        </div>
    )
}
