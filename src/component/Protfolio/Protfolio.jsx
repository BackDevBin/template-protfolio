import React from 'react';
import toy from '../../assets/portfolio/toy.png';
import camp from '../../assets/portfolio/summer.png';
import chef from '../../assets/portfolio/shef.png';
import { FaAngleRight, FaFileCode, FaLaptopCode } from 'react-icons/fa';

const Protfolio = () => {
    return (
        <div >
            <h3 className='text-xl font-semibold mb-5'>Portfolio</h3>


            <div className='md:grid grid-cols-2 gap-4'>

                <div className='w-full flex shadow-xl bg-[#0F172A] hover:bg-[#141E36]'>
                    <div className='relative'>
                        <img className='w-full h-full' src={toy} alt="" />
                        <div className='absolute inset-x-0 bottom-0 w-full bg-[#111A2E] p-2'>

                            <div className='flex justify-between text-sm'>

                                <a href='https://github.com/BackDevBin/toy-market-client' className='font-semibold text-indigo-200 flex items-center gap-1'><FaFileCode></FaFileCode> Client</a>
                                <a href="https://toy-market-client.web.app/" className='font-semibold text-indigo-200 flex items-center'>Preview <FaAngleRight></FaAngleRight></a>
                                <a href='https://github.com/BackDevBin/toy-market-server' className='font-semibold text-indigo-200 flex items-center gap-1'>Server <FaLaptopCode></FaLaptopCode></a>
                            </div>

                        </div>
                    </div>

                    <div className='w-1/2 ms-5 mt-5 me-3 mb-2 space-y-2 '>
                        <h3 className='text-3xl font-semibold'>The Jangle Toy</h3>
                        <p className='text-sm'>A Full stack E-commerce website.User can manage their product: add product, update product, delete product etc. Have a searching and sorting features.</p>
                        <ul className='list-disc text-sm ms-5 mb-2'>
                            <li>Single Page Application</li>
                            <li>Authentication support</li>
                            <li>MongoDB Server connection</li>
                            <li>Mobile Responsible</li>
                        </ul>
                        <div className='grid grid-cols-3 gap-2 text-sm'>
                            <p className='border border-slate-200 px-1'>HTML</p>
                            <p className='border border-slate-200 px-1'>Tailwind</p>
                            <p className='border border-slate-200 px-1'>React.js</p>
                            <p className='border border-slate-200 px-1'>Express.js</p>
                            <p className='border border-slate-200 px-1'>MongoDB</p>

                        </div>

                    </div>


                </div>
                <div className='w-full flex shadow-xl bg-[#0F172A] hover:bg-[#34334D]'>
                <div className='relative'>
                        <img className='w-full h-full' src={chef} alt="" />
                        <div className='absolute inset-x-0 bottom-0 w-full bg-[#111A2E] p-2'>

                            <div className='flex justify-between text-sm'>

                                <a href='https://github.com/BackDevBin/chef-recipe-hunter-client' className='font-semibold text-indigo-200 flex items-center gap-1'><FaFileCode></FaFileCode> Client</a>
                                <a href="https://chef-recipe-hunter-43426.web.app/" className='font-semibold text-indigo-200 flex items-center'>Preview <FaAngleRight></FaAngleRight></a>
                                <a href='https://github.com/BackDevBin/chef-recipe-hunter-server' className='font-semibold text-indigo-200 flex items-center gap-1'>Server <FaLaptopCode></FaLaptopCode></a>
                            </div>

                        </div>
                    </div>

                    <div className='w-1/2 ms-5 mt-5 me-3 mb-2 space-y-2'>
                        <h3 className='text-3xl font-semibold'>American Chef</h3>
                        <p className='text-sm'>Single page application. User can learn recipe method and hiring the best chefs.</p>
                        <ul className='list-disc text-sm ms-5 mb-2'>
                            <li>Single Page Application</li>
                            <li>Authentication support</li>
                            <li>Server using express.js </li>
                            <li>Mobile Responsible</li>
                            <li>Firebase and vercel tools</li>
                        </ul>
                        <div className='grid grid-cols-3 gap-2 text-sm'>
                            <p className='border border-slate-200 px-1'>HTML</p>
                            <p className='border border-slate-200 px-1'>Bootstrap</p>
                            <p className='border border-slate-200 px-1'>React.js</p>
                            <p className='border border-slate-200 px-1'>Express.js</p>
                            <p className='border border-slate-200 px-1'>MongoDB</p>

                        </div>

                    </div>


                </div>
                <div className='w-full flex shadow-xl bg-[#0F172A] hover:bg-[#34334D]'>
                <div className='relative'>
                        <img className='w-full h-full' src={camp} alt="" />
                        <div className='absolute inset-x-0 bottom-0 w-full bg-[#111A2E] p-2'>

                            <div className='flex justify-between text-sm'>

                                <a href='https://github.com/BackDevBin/summer-camp-school-client' className='font-semibold text-indigo-200 flex items-center gap-1'><FaFileCode></FaFileCode> Client</a>
                                <a href="https://summer-camp-school-clien-86a64.web.app/" className='font-semibold text-indigo-200 flex items-center'>Preview <FaAngleRight></FaAngleRight></a>
                                <a href='https://github.com/BackDevBin/summer-camp-school-server' className='font-semibold text-indigo-200 flex items-center gap-1'>Server <FaLaptopCode></FaLaptopCode></a>
                            </div>

                        </div>
                    </div>

                    <div className='w-1/2 ms-5 mt-5 me-3 mb-2 space-y-2'>
                        <h3 className='text-3xl font-semibold'>Warriors Camp</h3>
                        <p className='text-sm'>Educational website for Summer camp school.Have admin, instructor and student dashboards page and They can manage their classes . User authentication and payment system are mentioned as special features.</p>
                        <ul className='list-disc text-sm ms-5 mb-2'>

                            <li>Secure Payment system</li>
                            <li>Secure information(JWT)</li>
                            <li>Single Page Application</li>
                            <li>Authentication support</li>
                            <li>MongoDB Server connection</li>
                            <li>Mobile Responsible</li>
                        </ul>
                        <div className='grid grid-cols-3 gap-2 text-sm'>
                            <p className='border border-slate-200 px-1'>HTML</p>
                            <p className='border border-slate-200 px-1'>Tailwind</p>
                            <p className='border border-slate-200 px-1'>React.js</p>
                            <p className='border border-slate-200 px-1'>Express.js</p>
                            <p className='border border-slate-200 px-1'>MongoDB</p>

                        </div>

                    </div>


                </div>

            </div>

        </div>
    );
};

export default Protfolio;