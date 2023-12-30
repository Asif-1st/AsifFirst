import img from '../assets/img/pngegg(15).png'
import { FaCode } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { FaDatabase } from "react-icons/fa6";
import { motion } from 'framer-motion';

export default function Services() {
    return (
        <div className=" w-full py-10">
            {/* title  */}
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
                className=" flex justify-center items-center">Serviecs</motion.h1>
            {/* service container  */}
            <div className=" w-[80%] lg:w-3/5 mx-auto pt-16">
                {/* services */}
                <div
                    className="grid lg:grid-cols-2 gap-6 justify-center items-center grid-cols-1 text-center lg:text-left">
                    <motion.div
                        initial={{
                            x: 100,
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
                        <div>
                            <a href="#" className=' flex justify-center items-center lg:justify-start lg:items-start'>
                                <h5 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-white max-w-sm ">Noteworthy technology acquisitions 2024</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat facere sint, porro, nisi,</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 hover:text-white dark:focus:ring-blue-800">
                                Read more
                            </a>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{
                            x: -100,
                            opacity: 0
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: .7
                            }
                        }}
                        className=' flex justify-center items-center lg:justify-start'>
                        <div>
                            <img src={img} alt="" className=' lg:max-w-sm h-auto w-auto' />
                        </div>
                    </motion.div>
                </div>
                <div className=' py-16'>
                    <div className=' flex flex-col lg:flex-row flex-wrap  justify-center items-center w-full h-full lg:justify-between gap-4 lg:gap-4'>
                        <motion.div
                            initial={{
                                y: -100,
                                opacity: 0
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                                transition: {
                                    duration: .8
                                }
                            }}
                            className=' w-full p-6 h-xs md:w-72  bg-yellow-700 flex justify-center items-center flex-col rounded-md'>
                            <FaCode className=' text-black text-5xl' />
                            <h1 className=' text-2xl text-white capitalize mb-4'>
                                web Developer
                            </h1>
                            <p className=' pb-8 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat sit minima enim dolores culpa veniam reprehenderit nam quasi!</p>
                            <button>view more</button>
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0
                            }}
                            whileInView={{
                                opacity: 1,
                                transition: {
                                    duration: .8
                                }
                            }}
                            className=' w-full p-6 h-xs md:w-72  bg-gray-700 flex justify-center items-center flex-col rounded-md'>
                            <IoIosColorPalette className=' text-black text-5xl lg:z-10' />
                            <h1 className=' text-2xl text-white capitalize mb-4'>
                                Graphics Designer
                            </h1>
                            <p className=' pb-8 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat sit minima enim dolores culpa veniam reprehenderit nam quasi!</p>
                            <button>view more</button>
                        </motion.div>
                        <motion.div
                            initial={{
                                y: 100,
                                opacity: 0
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                                transition: {
                                    duration: .8
                                }
                            }}
                            className='w-full p-6 h-xs md:w-72  bg-sky-700 flex justify-center items-center flex-col rounded-md'>
                            <FaDatabase className=' text-black text-5xl' />
                            <h1 className=' text-2xl text-white capitalize mb-4'>
                                Data Analysist
                            </h1>
                            <p className=' pb-8 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat sit minima enim dolores culpa veniam reprehenderit nam quasi!</p>
                            <button>view more</button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}