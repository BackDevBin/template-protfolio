import React from 'react';
import pic from '../../assets/pic.png'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
    return (
        <div className='shadow-xl bg-[#162037] my-10'>

            <div className='grid grid-cols-4 w-full'>
                <div className='bg-[#19233B] py-5 px-3'>
                    <div className='rounded-lg items-center text-center space-y-2'>
                        <img className='rounded-full w-36 h-36 mx-auto pt-2 bg-slate-300 shadow-xl' src={pic} alt="" />
                        <h2 className='text-xl md:text-2xl font-bold'>Tishan Sarker</h2>
                        <p className='text-sm'>Mern stack developer</p>

                        <div className='px-2 py-2 border-b text-sm font-semibold'>
                            <div className='flex justify-between '>
                                <p>Residence:</p>
                                <p>Bangladesh</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>City:</p>
                                <p>Dhaka</p>
                            </div>
                            <div className='flex justify-between'>
                                <p>Age:</p>
                                <p>25</p>
                            </div>

                        </div>

                        <div className='flex gap-3 py-2 justify-center border-b'>
                            <div>
                                <div className="radial-progress text-green-500" style={{ "--size": "4rem", "--value": 100 }}>100%</div>
                                <p className='text-sm'>Bangla</p>
                            </div>
                            <div>
                                <div className="radial-progress text-green-500" style={{ "--size": "4rem", "--value": 70 }}>70%</div>
                                <p className='text-sm'>English</p>
                            </div>
                            <div>
                                <div className="radial-progress text-green-500" style={{ "--size": "4rem", "--value": 50 }}>50%</div>
                                <p className='text-sm'>Hindi</p>
                            </div>
                        </div>

                        <div className='flex gap-4 pt-2 justify-center'>
                            <div className='bg-slate-200 p-2 shadow-xl rounded-full'>
                                <a href="https://www.facebook.com/tishan.sarker.5/"> <FaFacebook className='text-lg text-indigo-800'></FaFacebook></a>
                            </div>
                            <div className='bg-slate-200 p-2 shadow-xl rounded-full'>
                                <a href="https://www.linkedin.com/in/tishan-sarker-301755185/"><FaLinkedin className='text-lg text-indigo-800'></FaLinkedin></a>
                            </div>
                            <div className='bg-slate-200 p-2 shadow-xl rounded-full'>
                                <a href="https://github.com/BackDevBin"><FaGithub className='text-lg text-indigo-800'></FaGithub></a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='col-span-3 p-5 space-y-2'>

                    <h2 className='text-xl md:text-3xl font-bold'>Who Am I ?</h2>
                    <p className='font-semibold'>Hi, I am Tishan Sarker. If you are looking for qualified developers and high quality services, you have come to the right place. I always show my respect for clients through the services I deliver. My work is determined by exactness and speed.Besides I am a quick learner and a self-motivated web developer.Very interested in learning about new technologies.</p>
                    <p className='font-semibold'><span  className='text-green-500'> Academic info: </span>In 2018, I completed a four-year diploma course in computer technology.Now I am studing Bachelor degree in Computer Science at Bangladesh University of Business and Technology.In my academic journey, I have learn in various aspects of computer science, including algorithms, data structures, and software development .These subjects not only broadened my knowledge but also honed my problem solving and analytical skills.Beyond my academic curriculum, I have done web development course from programming hero.</p>
                    <p className='font-semibold'>Last 3 years I have successfully completed many outsourcing projects and build a professional relationship with foreign client.I worked in the freelancer marketplace as a virtual assistant.At present I am seeking for a job role as a junior Mern stack developer.As a mern stack developer I am sharing principle that I have experienced</p>

                    <p className='font-semibold'>
                       <span className='text-green-500'> MongoDB:</span> I have knowledge of NoSQL databases and can work with MongoDB, I can create, query, and manage databases and collections. <br />

                       <span className='text-green-500'> Express.js</span> I am comfortable working with Express.js, I can create RESTful APIs, handle routing, and implement middleware for request handling. <br />

                       <span className='text-green-500'> React.js:</span>  I have a good understanding of React.js I can create reusable components, manage state and props, and implement event handling. I have experience working with React Router for handling navigation and routing in single-page applications. <br />

                       <span className='text-green-500'> Node.js:</span> I am proficient in server-side JavaScript using Node.js. I can build scalable and efficient web applications, handle HTTP requests, implement authentication and authorization, and work with databases.

                    </p>


                </div>

            </div>
        </div>
    );
};

export default About;