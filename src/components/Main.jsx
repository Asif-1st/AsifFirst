// react icons 
import { HiOutlineHandRaised } from "react-icons/hi2";
import { TypeAnimation } from 'react-type-animation';

import triangle from '../assets/triangle.svg'
import bubble from '../assets/bubble.svg'
// import bg from '../assets/wave-haikei.svg'
import Bg from '../assets/wave-haikei(2).png'


// framer motion 
import { motion } from "framer-motion"

function Main() {
    return (
        <div className=" py-20 w-full h-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${Bg})` }} >
            {/* container  */}
            <div className=" w-[80%] md:w-3/5 mx-auto ">
                <div className=" w-full flex flex-wrap lg:flex-row lg:flex justify-between items-center">
                    {/* main section content  */}
                    <motion.div
                        initial={{
                            y: 200,
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: .6
                            }
                        }}
                        className=" relative">
                        <div className=" flex justify-start items-center gap-3 py-4 pb-12">
                            <div className=" w-20 h-1 bg-blue-700 rounded-tr-full rounded-br-full"></div>
                            <h3 className=" flex gap-3 text-gray-400">Hi there! <HiOutlineHandRaised className=" text-yellow-300 text-2xl rotate-12" /></h3>
                            <img src={triangle} alt="" className=" w-32 xl:w-40 h-auto absolute top-0 right-0" />
                        </div>
                        <h1 className=" mb-6">this is <span className=" font-rubic text-yellow-300">ASIF</span>. <br /><h3 className=" text-3xl ">I am a <ExampleComponent className=" text-yellow-300" /></h3>
                        </h1>
                        <p className=" text-sm tracking-wide leading-relaxed xl:max-w-md text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, deserunt! Odio porro fuga illum sequi repudiandae neque dolorem, quibusdam id.</p>
                        <button className=" mt-6">Download Cv</button>
                    </motion.div>
                    {/* main section img  */}
                    <motion.img
                        initial={{
                            opacity:0,
                            y:-200
                        }}
                        whileInView={{
                            opacity:1,
                            y:0,
                            transition:{
                                duration: .5
                            }
                        }}
                        src={bubble} alt="" className=" z-10 md:max-w-[350px] flex justify-center items-center w-auto h-auto md:w-auto" />
                </div>
            </div>
        </div>
    )
}

export default Main


const ExampleComponent = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Front-End Developer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                ' Data Analyist',
                1000,
                ' Graphics Designer',
                1000,
                ' Google Assistant',
                1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1.875rem', lineHeight: '2.25rem', display: 'inline-block', color: 'yellow', textDecoration: 'yellowgreen' }}
            repeat={Infinity}
        />
    );
};