import { useState } from "react";
// import "./styles.css";
import { motion } from "framer-motion";
function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const input = 'focus:outline-none border-b-2 px-2 py-2 mb-6 bg-transparent w-[80%]';
    return (
        <div className=" w-full relative">
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
            <div className=" w-3/5 mx-auto py-10">
                <div className=" w-full flex justify-center items-center gap-10 lg:gap-5 flex-wrap flex-col lg:flex-row">
                    <div className=" flex-1">
                        <iframe className=" w-full max-w-md lg:max-w-full h-72 rounded-3xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115424.92058374971!2d88.92740197075953!3d25.303237504069248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fcbde7f280a0bd%3A0xbdf8c66d265231a5!2sNowpara%20Government%20Primary%20School!5e0!3m2!1sen!2sbd!4v1703930674296!5m2!1sen!2sbd" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <form className=" flex-1 flex flex-col justify-center py-8 max-w-sm w-full bg-gray-800 items-center ">
                        <input
                            className={input}
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                            placeholder="First name"
                            type="text"
                            name="firstName"
                            required
                        />
                        <input
                            className={input}
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                            placeholder="Last name"
                            type="text"
                            name="lastName"
                            required
                        />
                        <input
                            className={input}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Email address"
                            type="email"
                            name="email"
                            required
                        />
                        <input
                            className={input}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Password"
                            type="password"
                            name="password"
                            required
                        />
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 hover:text-white dark:focus:ring-blue-800">
                                Read more
                            </a>
                    </form>
                </div>
            </div>
            {/* footer  */}
            <div className=" w-full flex justify-center items-center py-4 px-2 bg-gray-800 text-center">
                <p>copyright 2023 developed by @sif. All right reserved</p>
            </div>
        </div>
    );
}
export default Form;