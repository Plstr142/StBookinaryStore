import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const [message, setMessage] = useState("")
  return (
    <div className="mx-5 my-5">
      <div className="h-[calc(100vh-120px)] flex justify-center items-center border border-green-400">
        <div className="w-full max-w-sm mx-auto bg-gray-100 shadow-lg rounded px-8 pt-6 pb-8 mb-4 ">
          <h2 className="text-xl font-semibold mb-4 text-black dark:text-black">
            Please Login
          </h2>

          <form className="w-full justify-between flex flex-col gap-5">
            <div className="emailform" name="emailform">
              <label
                className="block text-gray-800 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="shadow appearance-none border border-gray-200 rounded w-full py-2 px-3 leading-tight
              focus:outline-none focus:shadow"
              />
            </div>

            <div className="passwordform" name="passwordform">
              <label
                className="block text-gray-800 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your Password"
                className="shadow appearance-none border border-gray-200 rounded w-full py-2 px-3 leading-tight
              focus:outline-none focus:shadow"
              />
            </div>
            {
              message && <p className="text-red-500 text-xs mb-3">{message}</p>
            }
            <div>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#ffffff",
                  color: "#000000",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-black text-white px-4 py-2 rounded-lg"
              >
                Login
              </motion.button>
            </div>
          </form>
          <p className="align-baseline text-black text-sm m-2">Haven't an account? Please {""}
          <Link to="/register" className="text-black font-bold hover:text-[#bcc4a1]">Register</Link>
          </p>

          {/* google sign in */}
          <div className="mx-10 my-4 flex flex-col justify-between gap-2">
            <button className="w-full flex flex-row flex-wrap gap-1 items-center justifty-center border border-none bg-[#4285F4] hover:bg-[#34A853] text-white font-bold
            py-0 px-4 rounded focus:outline-none hover:text-black">
              <FaGoogle className="m-1 size-6"/>
              <p className="m-2 font-bold font-roboto text-md">Sign in with Google</p>
            </button> 
            <button className="w-full flex flex-row flex-wrap gap-1 items-center justifty-center border border-none bg-black hover:bg-white text-white font-bold
            py-0 px-4 rounded focus:outline-none hover:text-black">
              <FaGithub className="m-1 size-6"/>
              <p className="m-2 font-bold font-roboto text-md">Sign in with Github</p>
            </button> 
          </div>

          {/* mx-10 flex flex-col justify-between gap-4 */}
          <div className="">
            {/* <p className='invisible text-center text-gray-500 text-xs'>©2025 Book Store. All rights reserved.</p> */}
            <p className='text-center text-gray-500 text-xs'>©2025 Book Store. All rights reserved.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
