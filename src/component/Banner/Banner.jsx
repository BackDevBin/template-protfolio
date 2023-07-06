import React from 'react';
import pic from '../../assets/pic.png'
import laptop from '../../assets/portfolio/laptop.png'
import resume from '../../assets/portfolio/resume.png'
import { saveAs } from 'file-saver';

import { FaArrowRight, FaDownload } from 'react-icons/fa';

const Banner = () => {        
    
    const handleDownload = async () => {
        try {
          const response = await fetch('https://drive.google.com/file/d/1imP7zCREGv4G504mFbhnIiHn0Jt6VFqj/view?usp=sharing'); 
          const fileBlob = await response.blob();
          saveAs(fileBlob, 'Tishan_Sarker_Resume.pdf');
        } catch (error) {
          console.error('Error downloading the PDF:', error);
        }
    };

    return (
        <div className='md:flex gap-10'>
            <div className='md:w-1/2  px-3 py-3 space-y-2 shadow-xl bg-indigo-950  flex gap-6 items-center'>

                <div className='w-2/5 rounded-lg'>
                    <img className='rounded-full w-56 h-56 ms-2 pt-2 bg-slate-300 shadow-xl' src={pic} alt="" />
                </div>
                <div className='w-3/5'>
                    <h4 className='text-lg md:text-xl font-semibold'> Hi, I am</h4>
                    <h2 className='text-xl md:text-4xl font-bold'>Tishan Sarker</h2>
                    <h3 className='text-lg md:text-xl font-semibold mt-1'> Mern Stack Developer</h3>
                    <p className='text-md md:text-md mt-2'>I am an Junior Mern Stack Developer.I am a website developer from Bangladesh. I create professional websites.</p>
                    <button className="px-3 py-1 mt-2 border rounded-2xl hover:bg-gradient-to-r from-blue-950 via-purple-700 to-blue-950">More about me</button>
                </div>
            </div>

            <div className='md:w-1/2'>
                <div className='w-full shadow-xl bg-blue-950  flex gap-5 items-center mb-8'>
                    <h3 className='text-lg p-3 md:text-lg font-semibold bg-indigo-950 w-fit'>Latest Exploring</h3>
                    <p className='border border-orange-500 font-semibold rounded px-1'>Next.js</p>
                            <p className='border border-orange-500 font-semibold rounded px-1'>Node.js</p>
                            <p className='border border-orange-500 font-semibold rounded px-1'>Express.js</p>
                            <p className='border border-orange-500 font-semibold rounded px-1'>Firebase</p>
                </div>

                <div className='flex gap-8'>

                    <div className='w-full h-50 p-2 shadow-xl bg-indigo-950 '>
                        <img className='mx-auto h-40' src={laptop} alt="" />
                        <p className='text-xs uppercase font-semibold'>Showcase</p>
                        <div className='flex justify-between items-center'>
                            <h4 className='text-2xl font-semibold'>Projects</h4>
                            <FaArrowRight></FaArrowRight>
                        </div>
                    </div>
                    <div className='w-full h-50 p-2 shadow-xl bg-indigo-950 '>
                        <img className='mx-auto h-40' src={resume} alt="" />
                        <p className='text-xs uppercase font-semibold px-2'>Download</p>
                        <div className='flex justify-between items-center px-2'>
                            <h4 className='text-2xl font-semibold'>Resume</h4>
                            <button onClick={handleDownload}><FaDownload></FaDownload></button>
                        </div>
                    </div>
                </div>

            </div>




        </div>
    );
};

export default Banner;