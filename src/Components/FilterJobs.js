import React , { useState , useEffect } from 'react'

export default function FilterJobs({setCurrentJobs , allJobs}) {
    const testmatch = (parent , child) => {
        const smallParent = parent.toLowerCase();
        const smallChild = child.toLowerCase();
        return smallParent.includes(smallChild);
    }
    const [houres , setHoures] = useState(6);
    const [company , setCompany] = useState("");
    const [sity , setSity] = useState("");
    const [work , setWork] = useState("");
    useEffect(() => {
        let newCurrentJobs=allJobs.filter((job)=> {
            let checkHoures = +job.houres===+houres;
            let checkcompany = company==""||testmatch(job.company,company);
            let checksity = sity==""||testmatch(job.sity,sity)
            let checkwork = work==""||testmatch(job.job,work);
            return checkHoures && checkcompany && checksity && checkwork;
        })
        setCurrentJobs(newCurrentJobs);

    } , [houres , company , sity , work])
    return (
        <form className="text-primary row container my-3 fw-bold">
            <div className="row justify-content-center">
                <div className='form-group mb-4 col-8 mx-auto'>
                    <label htmlFor='houres' className="ms-2 input-label">{houres}/Houres</label>
                    <input onChange={(e)=>setHoures(e.target.value)} value={houres} min="2" max={12} type="range" name='houres' id='price' className='form-control form-border'></input>
                </div>
            </div>
            <div className='row'>
                <div className="form-floating mb-3 col-8 mx-auto">
                    <input value={company} onChange={(e)=>setCompany(e.target.value)} type="text" className="form-control form-border" id="floatingInput" placeholder="choose Company"/>
                    <label htmlFor="floatingInput" className="ms-2 input-label">choose Company</label>
                </div>
                <div className="form-floating mb-3 col-6">
                    <input value={sity} onChange={(e)=>setSity(e.target.value)} type="text" className="form-control form-border" id="floatingInput" placeholder="choose Sity"/>
                    <label htmlFor="floatingInput" className="ms-2 input-label">choose Sity</label>
                </div>
                <div className="form-floating mb-3 col-6">
                    <input value={work} onChange={(e)=>setWork(e.target.value)} type="text" className="form-control form-border" id="floatingInput" placeholder="choose Work"/>
                    <label htmlFor="floatingInput" className="ms-2  input-label">choose Work</label>
                </div>
            </div>
        </form>
    )
}
