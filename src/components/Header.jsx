// React icons 
import { useState } from "react";
import { BiFontFamily } from "react-icons/bi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";


// framer motion 
import { motion } from "framer-motion"

export default function Header() {
    // hamburger menu icon
    const [NavActive, setNavActive] = useState(!true);

    return (
        <div className="  z-10">
            <div className=" flex">
                {/* Navigation Container here  */}
                <div className=" w-4/5 mx-auto flex justify-between items-center md:gap-20 md:w-3/5">
                    {/* Logo Container  */}
                    <motion.div initial={
                        {
                            opacity: 0,
                            x: -200
                        }
                    }
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: .7
                        }} className=" flex justify-between items-center w-full md:w-auto py-6 z-10">
                        <BiFontFamily className=" text-5xl" />
                        {/* hamburger menu here  */}
                        <div className=" md:hidden" onClick={() => {
                            setNavActive(!NavActive);
                        }}>
                            {
                                NavActive ? <FaXmark className=" text-3xl text-yellow-300" /> : <HiOutlineMenuAlt4 className=" text-3xl text-yellow-300" />
                            }
                        </div>
                    </motion.div>
                    {/* navigation menu here  */}
                    <motion.div
                        className={`  rounded-tl-xl rounded-bl-xl bg-gray-800 z-10 absolute top-20 right-0 w-52 md:w-full p-4 origin-right transition duration-600 ease-linear  md:scale-x-100 md:opacity-100 md:relative md:top-0 md:bg-transparent lg:w-full ${NavActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'

                            }`}>
                        <ul className=" flex flex-col justify-center items-start gap-4 right-0 lg:gap-0 md:justify-end md:flex-row">
                            {
                                Data.map((d) =>
                                    <li className=" list-none lg:ml-6 lg:px-3 lg:py-2 xl:rounded-lg group xl:hover:bg-[#1a1a1a]" key={d.id}>
                                        <a href="/" className=" text-white group-hover:text-white md:text-yellow-300 lg:font-light hover:transition hover:duration-75">{d.tagsName}</a>
                                    </li>
                                )
                            }
                            <button className=" mt-6 flex justify-center items-center w-full md:hidden">learn More</button>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

// desktop nav links  
const Data = [
    {
        id: 1,
        tagsName: 'Testimonials'
    },
    {
        id: 2,
        tagsName: 'My Works'
    },
    {
        id: 3,
        tagsName: 'Contact'
    }
];


