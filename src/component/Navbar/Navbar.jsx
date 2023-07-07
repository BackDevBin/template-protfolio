import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar text-slate-200 bg-[#0F172A]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#0f172a] rounded-box">
                        <li><Link to="/" spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
                        <li><Link to='about' spy={true} smooth={true} offset={-100} duration={500}>About Me</Link></li>
                        <li><Link to="skill" spy={true} smooth={true} offset={-100} duration={500}>My Skill</Link></li>
                        <li><Link to="portfolio" spy={true} smooth={true} offset={-100} duration={500}>Portfolio</Link></li>
                        <li><a href="Tishan_Sarker_Resume.pdf" download="Tishan__Resume.pdf"><button>Resume</button></a></li>
                    </ul>
                </div>
                <img className='w-16 md:w-28' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/" spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
                    <li><Link to='about' spy={true} smooth={true} offset={-100} duration={500}>About Me</Link></li>
                    <li><Link to="skill" spy={true} smooth={true} offset={-100} duration={500}>My Skill</Link></li>
                    <li><Link to="portfolio" spy={true} smooth={true} offset={-100} duration={500}>Portfolio</Link></li>
                    <li><a href="Tishan_Sarker_Resume.pdf" download="Tishan__Resume.pdf"><button>Resume</button></a></li>
                </ul>
            </div>
            <div className="navbar-end">
                
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>
                <button className="px-3 py-1 border rounded-2xl hover:bg-gradient-to-r from-blue-950 via-purple-700 to-blue-950">Let's talk</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;