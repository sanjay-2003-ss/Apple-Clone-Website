import React from "react";
import { motion } from "framer-motion";
import { FaApple } from "react-icons/fa";

const  Watch = () => {
  return (
    <section className="relative h-full w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-white">
      {/* Animated Background Gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-gray-100"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl flex flex-col items-center">
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-semibold mb-6" >
        <img src="/images/logo.png" alt="" className="mt-7" />
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-1 text-gray-800 text-lg md:text-xl font-medium leading-relaxed mb-6" >
         Walk it. Take it. Track it. Love it.
        </motion.p>

            {/* Availability Info */}
        < motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-0 text-gray-500 text-lg md:text-xl"
        >
          Available from 19 Sep
        </motion.p>

             {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          viewport={{ once: true }}
          className="flex gap-4 mt-6 justify-center"
        ><a href="#"
            className="px-6 py-3 rounded-full border border-blue-600 text-blue-600 font-medium hover:bg-blue-600 hover:text-white  transition transform hover:scale-105">
           Learn more</a>
          <a href="#"
            className="px-6 py-3 rounded-full border border-blue-600 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition transform hover:scale-105">
            Pre Order
          </a>
        </motion.div>

{/* Product Images */}
<div className="relative w-full  flex items-center justify-center">
  {/* First image (rotates and fades out) */}
  <motion.img
    src="/images/se3-3.jpg"
    alt="Watch"
    initial={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
    animate={{ opacity: 0, scale: 1.05, rotate: 10, y: -10 }}
    transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
    className="absolute inset-0 mx-auto w-full z-10 mt-10"
  />

  {/* Second image (rotates and fades in) */}
  <motion.img
    src="/images/se3-2.png"
    alt="Watch"
    initial={{ opacity: 0, scale: 0.95, rotate: -10, y: 10 }}
    animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
    transition={{ duration: 1.2, ease: "easeInOut", delay: 1.5 }} 
    className="relative mx-auto w-full z-20 mt-10"
    whileHover={{
      y: [-2, 2, -2],
      rotate: [-1, 1, -1],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    }}
  />
</div>

   
      </div>
    </section>
  );
};

export default Watch;
