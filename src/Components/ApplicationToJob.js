import React , { useState } from 'react'
import { ContextShowMessage } from '../App';
export default function ApplicationToJob({myJob}) {
    const testSpecial = (str) => {
        const specialChars = `/[]!@#$%^&*()_+/-={};'":|,.<>?~\``; 
        return specialChars.split("").some(char => {
            return str.includes(char)
        });
    }
    const handleShowMessage = React.useContext(ContextShowMessage);
    const [name , setName] = useState("");
    const [number , setNumber] = useState(0);
    const [email , setEmail] = useState("");
    const [cv , setCv] = useState("");
    const handleForm = (e) => {
        e.preventDefault();
        if(name.length === 0) {
            handleShowMessage("invalid name",1);
            return 0;
        } 
        if(number.length < 10) {
            handleShowMessage("too short number",1);
            return 0;
        } 
        if(number.length>10) {
            if(number.length != 13 || number.substr(0,4) != "+963") {
                handleShowMessage("invalid number",1);
                return 0;
            } 
        }
        if(email.includes('@') === false) {
            handleShowMessage("invalid email",1);
            return 0;
        } 
        if(testSpecial(name) === true) {
            handleShowMessage("invalid name special Chars",1);
            return 0;
        } 
        if(cv.length === 0) {
            handleShowMessage("invalid CV Link",1);
            return 0;
        }
        let newApplicants = myJob.applicants;
        newApplicants.push({ 
            "name":name,
            "num":number,
            "email":email,
            "CV":cv
        })
        let newJob = {...myJob,"applicants":newApplicants}
        let Jobs = JSON.parse(window.localStorage.getItem("Jobs")).map(cur=> {
            return +cur.id===+newJob.id?newJob:cur;
        })
        window.localStorage.setItem("Jobs",JSON.stringify(Jobs));
        handleShowMessage("you applied for this job",0);
    }
    return (
        <form onSubmit={(e)=>handleForm(e)}>
            <div className='row fw-bold text-primary'>
                <div className="form-floating mb-3 col-8 mx-auto">
                    <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control form-border" id="floatingInput" placeholder="your Name"/>
                    <label htmlFor="floatingInput" className="ms-2 input-label">your Name</label>
                </div>
                <div className="form-floating mb-3 col-8 mx-auto">
                    <input value={number} onChange={(e)=>setNumber(e.target.value)} type="number" className="form-control form-border" id="floatingInput" placeholder="your Number"/>
                    <label htmlFor="floatingInput" className="ms-2 input-label">your Number</label>
                </div>
                <div className="form-floating mb-3 col-8 mx-auto">
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control form-border" id="floatingInput" placeholder="your Email"/>
                    <label htmlFor="floatingInput" className="ms-2 input-label">your Email</label>
                </div>
                <div className="form-floating mb-3 col-8 mx-auto">
                    <input value={cv} onChange={(e)=>setCv(e.target.value)} type="text" className="form-control form-border" id="floatingInput" placeholder="your CV link like: https://google.com"/>
                    <label htmlFor="floatingInput" className="ms-2 input-label">your CV Link</label>
                </div>
                <input type="submit" className="btn btn-primary col-8 mx-auto mt-3"/>
            </div>
        </form>
    )
}
