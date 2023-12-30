import { motion } from "framer-motion"
import { Test } from './constants/Const'
import avater from '../assets/avater.jpg'

export default function Testimonials() {
    return (
        <>
            <div className=" w-full py-10">
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
                    className=" flex justify-center items-center">Projects
                </motion.h1>
                <div className=" w-3/5 mx-auto pt-16">
                    {/* testimonials container  */}
                    <div className=" flex flex-col lg:flex-row justify-center items-center gap-6">
                        {
                            Test.map((index) => {
                                return (
                                    <motion.div
                                        initial={{
                                            x: 100,
                                            opacity: 0
                                        }}
                                        whileInView={{
                                            x: 0,
                                            opacity: 1,
                                            transition: {
                                                duration: .8
                                            }
                                        }}
                                        key={index.id} className=" flex flex-1 justify-center items-center flex-col w-full h-full  p-6 bg-gray-800 rounded-lg bg-gradient-to-tr from-black via-slate-500 to-fuchsia-300">
                                        <div className=" flex justify-center gap-5 items-center flex-col ">
                                            <img src={avater} alt="client1" className=" w-[45px] h-[45px] rounded-full outline-double" />
                                            <h3 className=" text-3xl border-b-4">{index.name}</h3>
                                        </div>
                                        <p className=" text-center text-slate-400 py-6 leading-6">{index.review}</p>
                                        <button>Learn More</button>
                                    </motion.div>
                                )
                            })
                        }
                    </div>
                    <motion.div
                    initial={{
                        x:-100,
                        opacity: 0
                    }}
                    whileInView={{
                        x:0,
                        opacity:1,
                        transition:{
                            duration:.8
                        }
                    }}
                     className=" pt-10 text-center">
                        <p className=" text-center text-slate-400 py-6 leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, possimus. Ea, nesciunt tempore quisquam pariatur atque voluptas quam adipisci possimus, consequuntur in minus? Delectus dolorum, rerum atque nam hic nisi.</p>
                        <button className="capitalize mt-4">explore more</button>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

