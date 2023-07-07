import React from 'react';
import './MySkill.css';
import mongo from '../../assets/icon/mon.png';
import htmlLogo from '../../assets/icon/html.png';
import cssLogo from '../../assets/icon/css.png';
import tail from '../../assets/icon/Tail.png';
import boot from '../../assets/icon/boot.png';
import react from '../../assets/icon/react.png';
import js from '../../assets/icon/js.png';
import fire from '../../assets/icon/firebase.png';
import node from '../../assets/icon/node.png';



const MySkill = () => { //hover:bg-[#34334D] bg-gradient-to-r from-[#15213D] to-[#0F172A] 
    return (
        <div id='skill' className='mb-10'>
            <h3 className='text-xl font-semibold mb-5'>My Skill</h3>

            <div className='grid grid-cols-2 md:grid-cols-3  gap-5 bg-[#0F172A] md:p-10 p-2'>

                <div className='flex gap-4 w-full p-3 rounded-full items-center shadow-xl bg-[#15213D]'>
                    <img className='w-10 h-10 md:w-16 md:h-16' src={htmlLogo} alt="" />
                    <div className='w-full space-y-2'>
                        <p className='text-sm md:text-xl font-semibold text-green-600'>HTML </p>
                        <progress className="skill-progress" value="90" max="100"></progress>
                        <p className='text-sm text-green-500'>90%</p>
                    </div>
                </div>
                <div className='flex gap-4 w-full p-3 rounded-full items-center shadow-xl bg-[#15213D]'>
                    <img className='w-10 h-10 md:w-16 md:h-16' src={cssLogo} alt="" />
                    <div className='w-full space-y-2'>
                        <p className='text-sm md:text-xl font-semibold text-green-600'>CSS </p>
                        <progress className="skill-progress" value="90" max="100"></progress>
                        <p className='text-sm md:text-xl text-green-500'>90%</p>
                    </div>
                </div>
            
                <div className='flex gap-4 w-full p-3 rounded-full items-center shadow-xl bg-[#15213D]'>
                    <img className='w-10 h-10 md:w-16 md:h-16' src={boot} alt="" />
                    <div className='w-full space-y-2'>
                        <p className=' text-sm md:text-xl font-semibold text-green-600'>Bootstrap</p>
                        <progress className="skill-progress" value="70" max="100"></progress>
                        <p className='text-sm md:text-xl text-green-500'>70%</p>
                    </div>
                </div>
            
                <div className='flex gap-4 w-full p-3 rounded-full items-center shadow-xl bg-[#15213D]'>
                    <img className='w-10 h-10 md:w-16 md:h-16' src={tail} alt="" />
                    <div className='w-full space-y-2'>
                        <p className=' text-sm md:text-xl font-semibold text-green-600'>Tailwind CSS </p>
                        <progress className="skill-progress" value="90" max="100"></progress>
                        <p className='text-sm md:text-xl text-green-500'>90%</p>
                    </div>
                </div>
            
                <div className='flex gap-4 w-full p-3 rounded-full items-center shadow-xl bg-[#15213D]'>
                    <img className='w-10 h-10 md:w-16 md:h-16' src={react} alt="" />
                    <div className='w-full space-y-2'>
                        <p className=' text-sm md:text-xl font-semibold text-green-600'>React.js </p>
                        <progress className="skill-progress" value="90" max="100"></progress>
                        <p className='text-sm md:text-xl text-green-500'>90%</p>
                    </div>
                </div>
            
                <div className='flex gap-4 w-full p-3 rounded-full items-center shadow-xl bg-[#15213D]'>
                    <img className='w-10 h-10 md:w-16 md:h-16' src={fire} alt="" />
                    <div className='w-full space-y-2'>
                        <p className=' text-sm md:text-xl font-semibold text-green-600'>FireBase </p>
                        <progress className="skill-progress" value="70" max="100"></progress>
                        <p className='text-sm md:text-xl text-green-500'>70%</p>
                    </div>
                </div>
            
                <div className='flex gap-4 w-full p-3 rounded-full items-center shadow-xl bg-[#15213D]'>
                    <img className='w-10 h-10 md:w-16 md:h-16' src={mongo} alt="" />
                    <div className='w-full space-y-2'>
                        <p className=' text-sm md:text-xl font-semibold text-green-600'>MongoDB </p>
                        <progress className="skill-progress" value="80" max="100"></progress>
                        <p className='text-sm md:text-xl text-green-500'>80%</p>
                    </div>
                </div>
            
                <div className='flex gap-4 w-full p-3 rounded-full items-center shadow-xl bg-[#15213D]'>
                    <img className='w-10 h-10 md:w-16 md:h-16' src={node} alt="" />
                    <div className='w-full space-y-2'>
                        <p className=' text-sm md:text-xl font-semibold text-green-600'>Express.js </p>
                        <progress className="skill-progress" value="80" max="100"></progress>
                        <p className='text-sm md:text-xl text-green-500'>80%</p>
                    </div>
                </div>
            
                <div className='flex gap-4 w-full p-3 rounded-full items-center shadow-xl bg-[#15213D]'>
                    <img className='w-10 h-10 md:w-16 md:h-16' src={js} alt="" />
                    <div className='w-full space-y-2'>
                        <p className=' text-sm md:text-xl font-semibold text-green-600'>JavaScript </p>
                        <progress className="skill-progress" value="90" max="100"></progress>
                        <p className='text-sm md:text-xl text-green-500'>90%</p>
                    </div>
                </div>
            



            </div>

        </div>
    );
};

export default MySkill;