import React, { useEffect } from 'react';
import { FaCode, FaLaptopCode, FaReact } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = () => { 

        useEffect(() => {
                AOS.init({
                  duration: 800, // Specify the animation duration
                });
              }, []);

        return (
                <div className='mb-10'>
                        <h3 className='text-xl font-semibold mb-5'>My Service</h3>
                        <div className='grid md:grid-cols-3 gap-10'>
                                <div data-aos="zoom-in" className='w-full text-center h-72 px-4 py-5 space-y-2 shadow-xl bg-gradient-to-r from-[#15213D] to-[#0F172A]'>
                                        <FaCode className='text-5xl md:text-7xl text-orange-500 mx-auto'></FaCode>
                                        <h2 className='text-lg md:text-3xl font-bold'>Front End Development</h2>
                                        <p className='text-sm md:text-base'>The three main languages are HTML, CSS, and JavaScript.Also focus on frameworks, libraries, and other useful tools.example Tailwind, Bootstrap, React and others</p>

                                </div>
                                <div data-aos="zoom-in" className='w-full text-center h-72 p-4 space-y-2 shadow-xl bg-[#0F172A]'>
                                        <FaLaptopCode className='text-5xl md:text-7xl text-orange-500 mx-auto'></FaLaptopCode>
                                        <h2 className='text-lg md:text-3xl font-bold'>Backend Development</h2>
                                        <p className='text-sm md:text-base'>Use MERN stack technologies that enables faster application development.There are many good reasons to use the MERN Stack.For example, 3-tier architecture that includes frontend, backend, and database using JavaScript and JSON.</p>
                                </div>
                                <div data-aos="zoom-in" className='w-full text-center h-72 p-4  space-y-2 shadow-xl bg-gradient-to-r from-[#0F172A] to-[#15213D]'>

                                        <FaReact className='text-5xl md:text-7xl text-orange-500 mx-auto'></FaReact>
                                        <h2 className='text-lg md:text-3xl font-bold'>Single Page Application</h2>
                                        <p className='text-sm md:text-base'>A single page application is a website or web application that dynamically rewrites a current web page with new data from the web server, instead of the default method of a web browser loading entire new pages.</p>
                                </div>

                        </div>
                </div>
        );
};

export default Service;