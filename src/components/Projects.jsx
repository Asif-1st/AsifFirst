import { motion } from 'framer-motion';
import project1 from '../assets/img/project1.jpg'
import project4 from '../assets/img/project4.jpg'
import project2 from '../assets/img/project2.png'
// import React from 'react';
// import {props} from 'react'

export default function Projects() {
    return (
        <>
            <div className=' w-full py-10'>
                {/* head title  */}
                <motion.h1
                    initial={{
                        y: 100,
                        opacity: 0
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: .7
                        }
                    }}
                    className=" flex justify-center items-center">Projects</motion.h1>
                <div className=' w-[80%] mx-auto lg:w-3/5'>
                    {/* project container  */}
                    <div className=' flex justify-center items-center flex-col py-10 gap-8 lg:gap-0'>
                        {/* project content box  */}
                        <div className=' flex justify-center items-center flex-col-reverse gap-8 lg:gap-0 lg:flex-row lg:justify-between lg:w-full'>
                            <motion.div
                                initial={{
                                    x: 100,
                                    opacity: 0
                                }}
                                whileInView={{
                                    x: 0,
                                    opacity: 1,
                                    transition: {
                                        duration: .7
                                    }
                                }}>
                                <Project
                                    img={project1}
                                />
                            </motion.div>
                            {/* content  */}
                            <div>
                                <motion.div
                                    initial={{
                                        x: -100,
                                        opacity: 1
                                    }}
                                    whileInView={{
                                        x: 0,
                                        opacity: 1,
                                        transition: {
                                            duration: .7
                                        }
                                    }}
                                    className="">
                                    {/* service section content  */}
                                    <div className=' max-w-[27rem]'>
                                        <a href="#" className=' flex justify-start items-start'>
                                            <h5 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-white max-w-sm ">Noteworthy technology acquisitions 2024</h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat facere sint, porro, nisi,</p>
                                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 hover:text-white dark:focus:ring-blue-800">
                                            Read more
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        {/* projects preview  */}
                        <div className=' flex justify-center flex-col lg:flex-row gap-8 lg:gap-0 items-center lg:justify-between lg:w-full lg:pt-10'>
                            <motion.div
                                initial={{
                                    x: 100,
                                    opacity: 0
                                }}
                                whileInView={{
                                    x: 0,
                                    opacity: 1,
                                    transition: {
                                        duration: .7
                                    }
                                }}>
                                <Project
                                    img={project2}
                                />
                            </motion.div>
                            <Project
                                img={project4}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


const Project = (props) => {
    return (
        <div className=' border-4 border-sky-600 rounded-md w-full sm:max-w-[27rem] h-auto sm:h-[212px] overflow-hidden flex justify-center items-center relative group lg:w-full'>
            <img src={props.img} alt="" className=' w-full lg:max-w-[27rem] h-auto group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out group-hover:scale-125 ' />
            <div className=' absolute z-10 bg-[#1a1a5ec7] w-full h-full flex justify-center items-center flex-col text-white scale-x-0 opacity-0 duration-500 origin-left group-hover:scale-100 group-hover:opacity-100'>
                <h3 className=' mb-4 font-poppins text-xl'></h3>
                <button className=' px-3 py-2 rounded-sm bg-red-500'>See Demo</button>
            </div>
        </div>
    )
};
