import React , { useEffect , useState } from 'react'
import { Route , Routes } from 'react-router-dom'
import Applicant from './Components/Applicant'
import Company from './Components/Company'
import MainPage from './Components/MainPage'
import Navbar from './Components/NavBar'
import JobDecription from './Components/JobDecription'
import NewJob from './Components/NewJob'
import './main.css'
import './bootstrap.min.css'
import Profile from './Components/Profile'
import Footer from './Components/Footer'
const handleShowMessage = (message , bad) => {
    let x = document.createElement("div");
    x.id = 'message';
    x.classList = (bad?"bg-danger":"bg-success") + " message";
    x.textContent = message;
    document.body.append(x);
    setTimeout( () => {document.getElementById('message').remove();},3000)
}
export let ContextShowMessage;
const App=()=>{
    ContextShowMessage = React.createContext(handleShowMessage);
    if(window.localStorage.getItem("Jobs").length===0) {
        window.localStorage.setItem("Jobs" , JSON.stringify(require("./initJobs.json")));
    }
    const [countId , setCountId] = useState(3);
    const [availableJobs , setAvailableJobs] = useState(JSON.parse(window.localStorage.getItem("Jobs")));
    return (
        <ContextShowMessage.Provider value={handleShowMessage}>
        <div className='mainDiv'>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<MainPage/>}/>
                <Route exact path='/applicant' element={<Applicant availableJobs={availableJobs}/>}/>
                <Route exact path='/company' element={<Company/>}/>
                <Route exact path='/company/newJob' element={<NewJob countId={countId} setCountId={setCountId} />}/>
                <Route exact path='/company/applicant' element={<Profile/>}/>
                <Route exact path='/jobtitle' element={<JobDecription/>}/>
            </Routes>
            <Footer />
        </div>
        </ContextShowMessage.Provider>
    );
}

export default App;
