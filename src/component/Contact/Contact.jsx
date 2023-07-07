import React, { useEffect } from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

    useEffect(() => {
        AOS.init({
          duration: 1200, // Specify the animation duration
        });
      }, []);

    return (
        <div id='contact' className='text-slate-400 w-full p-10 pb-5 bg-[#0F172A]'>

            <div className='md:flex gap-10'>
                <div className='w-1/2'>
                    <h3 className='uppercase pb-4 text-lg'>Contact Info</h3>
                    <div className='flex gap-4 pb-4'>
                        <div className='bg-slate-200 p-3 shadow-xl rounded'>
                            <FaRegEnvelope className='text-3xl text-indigo-800'></FaRegEnvelope>
                        </div>
                        <div>
                            <p className='uppercase font-bold text-slate-500 text-sm'>Mail Me</p>
                            <p>tishansarker873@gmail.com</p>
                        </div>

                    </div>
                    <div className='flex gap-4 pb-4'>
                        <div className='bg-slate-200 p-3 shadow-xl rounded'>
                            <FaPhoneAlt className='text-3xl text-indigo-800'></FaPhoneAlt>
                        </div>
                        <div>
                            <p className='uppercase font-bold text-slate-500 text-sm'>Call Me</p>
                            <p>+8801960025210</p>
                        </div>

                    </div>
                    <div className='flex gap-4 pb-4'>
                        <div className='bg-slate-200 p-3 shadow-xl rounded'>
                            <FaLocationDot className='text-3xl text-indigo-800'></FaLocationDot>
                        </div>
                        <div>
                            <p className='uppercase font-bold text-slate-500 text-sm'>Location</p>
                            <p>Dhaka, Bangladesh</p>
                        </div>

                    </div>

                    <h3 className='uppercase pb-4 mt-2 text-lg'>Social Info</h3>

                    <div className='flex gap-4 pb-4'>
                        <div className='bg-slate-200 p-3 shadow-xl rounded-full'>
                            <a href="https://www.facebook.com/tishan.sarker.5/"> <FaFacebook className='text-xl text-indigo-800'></FaFacebook></a>
                        </div>
                        <div className='bg-slate-200 p-3 shadow-xl rounded-full'>
                            <a href="https://www.linkedin.com/in/tishan-sarker-301755185/"><FaLinkedin className='text-xl text-indigo-800'></FaLinkedin></a>
                        </div>
                        <div className='bg-slate-200 p-3 shadow-xl rounded-full'>
                            <a href="https://github.com/BackDevBin"><FaGithub className='text-xl text-indigo-800'></FaGithub></a>
                        </div>
                    </div>

                </div>
                <div data-aos="fade-up" className='md:w-1/2 text-center'>
                    <h1 className='text-start font-semibold text-3xl md:text-4xl mb-10'>Let’s work <span className='text-indigo-600'>together</span></h1>
                    <form action='https://formspree.io/f/xbjvjlyy' method='POST'>
                        <input type='text' placeholder='Name' name='Name' className='w-full py-2 px-3 bg-blue-900 block mb-5' required></input>
                        <input type='email' placeholder='Email' name='Email' className='w-full py-2 px-3 bg-blue-900 block mb-5' required></input>
                        <input type='text' placeholder='Subject' name='Subject' className='w-full py-2 px-3 bg-blue-900 block mb-5'></input>
                        <textarea placeholder='Message' name='Message' className='w-full h-28 py-2 px-3 bg-blue-900 block mb-5' required></textarea>
                        <input type="submit" value="SEND MESSAGE" className="px-3 py-1 border hover:bg-gradient-to-r from-blue-900 via-purple-700 to-blue-950" />
                    </form>
                </div>
            </div>
            <p className='text-xs m-2'>All rights reserved copyright@ 2023 design by Tishan</p>
        </div>
    );
};

export default Contact;