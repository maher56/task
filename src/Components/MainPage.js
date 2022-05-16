import React from 'react'
import { Link } from 'react-router-dom'
import hello from '../images/gif/hello.gif'
export default function MainPage() {
  return (
    <div className="mt-5 text-center">
        <div><img src={hello} className="mb-4 img-fluid"  alt="" /></div>
        <h1 className="h4-sm mb-4">welcome to the best place to make <span className="text-primary">business</span></h1>
            <div className="links d-flex align-items-center justify-content-center gap-3">
                <Link className="btn btn-primary btn-lg " to="/applicant">Applicant</Link>
                <Link className="btn btn-primary btn-lg" to="/company">Company</Link>
            </div>
    </div>
  )
}
