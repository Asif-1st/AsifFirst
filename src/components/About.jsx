import avater from '../assets/avater.jpg'
import { motion } from 'framer-motion';

export default function About() {
    return (
        <>
            <div className=' w-[80%] md:w-3/5 mx-auto py-24 z-10'>
                {/* Section Name  */}
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 200
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: .7
                        }
                    }}
                    className=" flex justify-center items-center py-2 pb-28 z-10">About me</motion.h1>
                {/* About me container  */}
                <div className=' flex justify-center items-center xl:justify-between xl:w-full gap-10 flex-wrap lg:flex-nowrap'>
                    {/* img container  */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -100
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: .4
                            }
                        }}
                        className=' flex justify-center items-center'>
                        <div className=' relative w-sm h-full'>
                            <img className=' w-auto sm:max-w-xs h-auto rounded-2xl' src={avater} alt="profile img" />
                            <div className=' absolute bg-red-500 w-48 h-[465px] -top-8 -right-8 -z-10 rounded-3xl '></div>
                        </div>
                    </motion.div>
                    {/* content container  */}
                    <motion.div
                        initial={{
                            opacity:0,
                            x:100,
                        }}
                        whileInView={{
                            opacity:1,
                            x:0,
                            transition:{
                                duration: .7
                            }
                        }}
                        className=' flex flex-col items-start justify-center z-10'>
                        <h1 className=' text-yellow-300 font-rubic py-10'>Hello World !</h1>
                        <p className=' text-sm tracking-wide leading-relaxed pb-4'>🚀 Hey there! I m Asif, a front-end wizard crafting pixel-perfect web experiences. 💻 Fluent in React.js, Vue.js, and Angular, I turn ideas into sleek, user-centric designs. 🎨 Embracing constant learning, I m here to bring your vision to life. Lets code something extraordinary together! 🌟</p>
                        <p className=' text-sm tracking-wide leading-relaxed pb-6 mb-4 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium reiciendis porro quasi odio?</p>
                        <div className=' w-full flex flex-wrap justify-center items-center lg:items-start lg:justify-start lg:gap-10'>
                            <div className="flex flex-col justify-center items-center lg:flex-col lg:justify-start lg:items-start">
                                <h2 className=' flex justify-center lg:justify-start items-center w-full text-4xl mb-2'>300 +</h2>
                                <p className=' text-blue-400'>Projects <br />
                                    done
                                </p>
                            </div>
                            <div className="flex flex-col justify-center items-center lg:flex-col lg:justify-start lg:items-start">
                                <h2 className=' flex justify-center lg:justify-start items-center w-full text-4xl mb-2'>2k +</h2>
                                <p className=' text-blue-400'>Client <br />
                                    Satisfaction
                                </p>
                            </div>
                            <div className="flex flex-col justify-center items-center lg:flex-col lg:justify-start lg:items-start">
                                <h2 className=' flex justify-center lg:justify-start items-center w-full text-4xl mb-2'>1.9k +</h2>
                                <p className=' text-blue-400'>Client <br />
                                    Good Review
                                </p>
                            </div>
                        </div>
                        <button className=' mt-10'>Read More</button>
                    </motion.div>
                </div>
            </div>
        </>
    )
}