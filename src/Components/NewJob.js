import React , { useState } from 'react'
import { ContextShowMessage } from '../App';
export default function NewJob({setCountId,countId}) {
    const handleShowMessage = React.useContext(ContextShowMessage);
    const [name , setName] = useState("");
    const [sity , setSity] = useState("");
    const [logo , setLogo] = useState();
    const [number , setNumber] = useState(2);
    const [company , setCompany] = useState("");
    const [description , setDescription] = useState("");
    const handleForm = (e) => {
        e.preventDefault();
        if(name.length === 0) {
            handleShowMessage("invalid job Name" , 1)
            return 0;
        } 
        if(sity.length === 0) {
            handleShowMessage("invalid sity" , 1)
            return 0;
        }
        if(company.length === 0) {
            handleShowMessage("invalid company Name" , 1)
            return 0;
        } 
        if(description.length === 0) {
            handleShowMessage("invalid description" , 1)
            return 0;
        } 
        if(number < 2 || number > 12) {
            handleShowMessage("invalid houres" , 1)
            return 0;
        }
        let oddJobs = JSON.parse(window.localStorage.getItem("Jobs"));
        let newJob = {
            "company":company,
            "job":name,
            "id":countId,
            "sity":sity,
            "logo":"https://a.top4top.io/s_2326mpann1.jpg",
            "houres":number,
            "applicants":[],
            "description":description
        }
        setCountId(prev => prev+1)
        oddJobs.push(newJob);
        window.localStorage.setItem("Jobs",JSON.stringify(oddJobs)); 
        setName("");setCompany("");setSity("");
        setDescription("");setLogo("");setNumber(2);
        handleShowMessage("New Job has been Added" , 0);
    }
    return (
        <React.Fragment>
        <h2 className='text-center my-4'>fill this fields to post a new Job</h2>
        <form onSubmit={(e)=>handleForm(e)}>
            <div className='row fw-bold text-primary'>
                <div className="form-floating mb-3 col-8 mx-auto">
                    <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control form-border" id="floatingInput" placeholder="Name of Job"/>
                    <label htmlFor="floatingInput" className="ms-2 input-label">Name of Job</label>
                </div>
                <div className="form-floating mb-3 col-8 mx-auto">
                    <input value={sity} onChange={(e)=>setSity(e.target.value)} type="text" className="form-control form-border" id="floatingInput" placeholder="place of Job"/>
                    <label htmlFor="floatingInput" className="ms-2 input-label">place of Job</label>
                </div>
                <div className="form-floating mb-3 col-8 mx-auto">
                    <input value={logo} onChange={(e)=>setLogo(e.target.value)} type="text" className="form-control form-border" id="floatingInput" placeholder="link of your logo like https://a.top4top.io/s_2326mpann1.jpg"/>
                    <label htmlFor="floatingInput" className="ms-2 input-label">link of your logo like</label>
                </div>
                <div className="form-floating mb-3 col-8 mx-auto">
                    <input value={company} onChange={(e)=>setCompany(e.target.value)} type="text" className="form-control form-border" id="floatingInput" placeholder="your Company Name"/>
                    <label htmlFor="floatingInput" className="ms-2 input-label">your Company Name</label>
                </div>
                <div className="form-floating mb-3 col-8 mx-auto">
                    <input value={number} onChange={(e)=>setNumber(e.target.value)} type="number" className="form-control form-border" id="floatingInput" placeholder="Number of Houres" min="2" max="12"/>
                    <label htmlFor="floatingInput" className="ms-2 input-label">Number of Houres</label>
                </div>
                <div className="form-floating mb-3 col-8 mx-auto">
                    <textarea  value={description} onChange={(e)=>setDescription(e.target.value)} className="form-control form-border" min-height="100px" placeholder="description of job" id="floatingTextarea2" ></textarea>
                    <label htmlFor="floatingTextarea2" className="ms-2 input-label">description of job</label>
                </div>
                <input type="submit" className="btn btn-primary col-8 mx-auto mt-3"/>
            </div>
        </form>
        </React.Fragment>
    )
}
