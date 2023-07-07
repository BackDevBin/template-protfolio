import React, { useEffect } from 'react';
import pic from '../../assets/pic.png'
import laptop from '../../assets/portfolio/laptop.png'
import resume from '../../assets/portfolio/resume.png'
import { saveAs } from 'file-saver';

import { FaArrowRight, FaDownload } from 'react-icons/fa';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Banner = () => {

    useEffect(() => {
        AOS.init({
          duration: 800, // Specify the animation duration
        });
      }, []);


    return (
        <div className='md:flex gap-10 m-2 text-slate-400 '>
            <div data-aos="fade-right" className='mt-3 md:w-1/2  px-3 py-3 space-y-2 shadow-xl bg-indigo-950  flex gap-6 items-center'>

                <div className='w-2/5 rounded-lg'>
                    <img className='rounded-full md:w-56 md:h-56 ms-2 pt-2 bg-slate-300 shadow-xl' src={pic} alt="" />
                </div>
                <div className='relative w-3/5'>
                    <h4 className='text-lg md:text-xl font-semibold'> Hi, I am</h4>
                    <h2 className='text-xl md:text-4xl font-bold'>Tishan Sarker</h2>
                    <h3 className='text-lg md:text-xl font-semibold mt-1'> Mern Stack Developer</h3>
                    <p className='text-xs md:text-md mt-2 font-semibold'>I build clean, modern, great looking and interactive Mern Stack based web application....</p>
                    <Link to='about'  spy={true} smooth={true} offset={-80} duration={500} className="absolute md:text-2xl md:bottom--1 right-5 px-3 py-1 mt-2 border rounded-full hover:bg-gradient-to-r from-blue-950 via-purple-700 to-blue-950"><FaArrowRight></FaArrowRight></Link>
                </div>
            </div>

            <div  className='mt-3 md:w-1/2'>
                <div data-aos="fade-left" data-aos-delay="600" className='w-full shadow-xl bg-blue-950 flex mb-3 md:mb-8'>
                    <h3 className='text-lg p-3 md:text-lg font-semibold bg-indigo-950 w-52'>Latest Exploring</h3>
                    <Marquee>
                        <div className='flex gap-5'>
                            <p className='border border-orange-700 bg-[#0F172A] font-semibold rounded px-2'>Next.js</p>
                            <p className='border border-orange-700 bg-[#0F172A] font-semibold rounded px-2'>Node.js</p>
                            <p className='border border-orange-700 bg-[#0F172A] font-semibold rounded px-2'>Express.js</p>
                            <p className='border border-orange-700 bg-[#0F172A] font-semibold rounded px-2'>Firebase</p>
                        </div>
                    </Marquee>
                </div>

                <div className='flex gap-8'>

                    <div data-aos="fade-up" data-aos-delay="1000" className='w-full h-50 p-2 shadow-xl bg-indigo-950 '>
                        <img className='mx-auto h-36' src={laptop} alt="" />
                        <p className='text-xs uppercase font-semibold'>Showcase</p>
                        <div className='flex justify-between items-center'>
                            <h4 className=' text-2xl font-semibold'>Projects</h4>
                            <Link to='portfolio'  spy={true} smooth={true} offset={-80} duration={500}> <button><FaArrowRight className='text-3xl me-1'></FaArrowRight></button></Link>
                           
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="1400" className='w-full h-50 p-2 shadow-xl bg-indigo-950 '>
                        <img className='mx-auto h-36' src={resume} alt="" />
                        <p className='text-xs uppercase font-semibold px-2'>Download</p>
                        <div className='flex justify-between items-center px-2'>
                            <h4 className='text-2xl font-semibold'>Resume</h4>
                            <a href="Tishan_Sarker_Resume.pdf" download="Tishan__Resume.pdf"><button><FaDownload className='text-2xl me-1'></FaDownload></button></a>
                        </div>
                    </div>
                </div>

            </div>




        </div>
    );
};

export default Banner;