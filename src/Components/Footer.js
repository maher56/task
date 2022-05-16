import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillSkype } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
export default function Footer() {
    return (
        <footer className='contact bg-light mt-4 p-4'>
            <h2 className='text-center text-dark'>Contact us</h2>
            <div className='social d-flex justify-content-around mt-4'>
                <a target="_blank" href='https://google.com'><AiFillGithub className='h1' /></a>
                <a target="_blank" href='https://google.com'><AiFillFacebook className='h1' /></a>
                <a target="_blank" href='https://google.com'><AiFillSkype className='h1' /></a>
                <a target="_blank" href='https://google.com'><AiFillTwitterCircle className='h1' /></a>
                <a target="_blank" href='https://google.com'><AiOutlineLinkedin className='h1' /></a>
            </div>
        </footer>
    )
}
