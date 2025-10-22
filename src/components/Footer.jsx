import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer justify-center md:justify-between text-lg md:footer-horizontal bg-neutral text-neutral-content md:p-10">
            <div className=''>
                <Link to={"/"} className=" cursor-pointer text-2xl oswald-font">Game<span className='text-primary font-bold'>Hub</span></Link>
                <p className='text-accent w-80'>Way to Find your Happiness. Yes!! it is the place where you find your entertenment.</p>
            </div>
            <div className='flex h-full justify-between gap-8 bg-base-300 p-5 rounded-xl lg:rounded-none lg:rounded-tr-4xl lg:rounded-bl-4xl'>
                <nav className='flex flex-col'>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <div className='w-px min-h-full bg-primary'></div>
                <nav className='flex flex-col'>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;