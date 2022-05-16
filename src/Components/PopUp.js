import React from 'react'
import { Link } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import { AiFillCloseCircle } from "react-icons/ai";
export default function PopUp({applicants , isOpen , setIsOpen , id , setAvailableJobs}) {
    const {Header , Body, Footer } = Modal;
    const handleApplicant = (applicant) => {
        window.localStorage.setItem("applicant" , JSON.stringify([applicant,id]));
    }
    const handleDelete = (jobId) => {
        const newJobs = JSON.parse(window.localStorage.getItem("Jobs")).filter(job => +job.id !== +id);
        setIsOpen(false);
        setAvailableJobs(newJobs);
        window.localStorage.setItem("Jobs",JSON.stringify(newJobs));
    }
    return (
        <Modal show={isOpen} onHide={() => setIsOpen(false)}>
            <Header><h2 className="text-center w-100">{applicants.length} Vacancies</h2></Header>
            <Body>
                <ul className="list-group">
                    {applicants.map(applicant => {
                        return <li key={applicant.email} className="list-group-item d-flex justify-content-between">
                            <h3 className="m-0">{applicant.name}</h3>
                            <Link to="/company/applicant" className='btn btn-sm btn-primary' onClick={()=>handleApplicant(applicant)}>Show profile</Link>
                        </li>
                    })}
                </ul>
            </Body>
            <Footer className='d-flex justify-content-between'> <span onClick={() => handleDelete(id)} className='text-danger fw-bold cursor-pointer'>Delete</span><AiFillCloseCircle onClick={() => setIsOpen(false)} className='h2 cursor-pointer'/></Footer>
        </Modal>
    );
}
//backdrop="static"