import React from 'react'
import logo from './../images/defaultLogo.jpg'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-light px-5">
        <div className="container">
            <Link className="navbar-brand m-auto m-md-0" to="/">
                <img className="logo" src={logo} alt="the company logo"/>
            </Link>
            <ul className="list-unstyled mb-0 fw-bold mx-auto mx-sm-0 d-flex justify-content-between">
                <li><Link to="/applicant">Applicant</Link></li>
                <li><Link to="/company">Company</Link></li>
            </ul>
        </div>

    </nav>
  )
}
