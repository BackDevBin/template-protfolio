import React from 'react';
import { FaCode, FaLaptopCode, FaReact } from 'react-icons/fa';

const Service = () => { //#15213D
        return (
                <div className='mb-10'>
                        <h3 className='text-xl font-semibold mb-5'>My Service</h3>
                        <div className='flex gap-10 '>
                                <div className='w-full text-center h-72 px-4 py-5 space-y-2 shadow-xl bg-gradient-to-r from-[#15213D] to-[#0F172A]'>
                                        <FaCode className='text-7xl text-orange-500 mx-auto'></FaCode>
                                        <h2 className='text-xl md:text-3xl font-bold'>Front End Development</h2>
                                        <p>The three main languages are HTML, CSS, and JavaScript.Also focus on frameworks, libraries, and other useful tools.example Tailwind, Bootstrap, React and others</p>

                                </div>
                                <div className='w-full text-center h-72 p-4 space-y-2 shadow-xl bg-[#0F172A]'>
                                        <FaLaptopCode className='text-7xl text-orange-500 mx-auto'></FaLaptopCode>
                                        <h2 className='text-xl md:text-3xl font-bold'>Backend Development</h2>
                                        <p>Use MERN stack technologies that enables faster application development.There are many good reasons to use the MERN Stack.For example, 3-tier architecture that includes frontend, backend, and database using JavaScript and JSON.</p>
                                </div>
                                <div className='w-full text-center h-72 p-4  space-y-2 shadow-xl bg-gradient-to-r from-[#0F172A] to-[#15213D]'>

                                        <FaReact className='text-7xl text-orange-500 mx-auto'></FaReact>
                                        <h2 className='text-xl md:text-3xl font-bold'>Single Page Application</h2>
                                        <p>A single page application is a website or web application that dynamically rewrites a current web page with new data from the web server, instead of the default method of a web browser loading entire new pages.</p>
                                </div>

                        </div>
                </div>
        );
};

export default Service;