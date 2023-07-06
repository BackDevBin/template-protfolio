import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar text-slate-200 bg-[#0F172A]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#0f172a] rounded-box">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About Me</Link></li>
                        <li><Link>My Skill</Link></li>
                        <li><Link>Portfolio</Link></li>
                        <li><Link to="https://drive.google.com/file/d/1imP7zCREGv4G504mFbhnIiHn0Jt6VFqj/view?usp=sharing">Resume</Link></li>
                    </ul>
                </div>
                <img className='w-16 md:w-28' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Me</Link></li>
                    <li><Link>My Skill</Link></li>
                    <li><Link>Portfolio</Link></li>
                    <li><Link to='https://drive.google.com/file/d/1imP7zCREGv4G504mFbhnIiHn0Jt6VFqj/view?usp=sharing'>Resume</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="px-3 py-1 border rounded-2xl hover:bg-gradient-to-r from-blue-950 via-purple-700 to-blue-950">Let's talk</button>
            </div>
        </div>
    );
};

export default Navbar;