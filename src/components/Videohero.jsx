import React from "react";
import { motion } from "framer-motion";

const VideoHero = () => {
  return (
    <section className="relative h-full w-full bg-black flex items-center justify-center overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
    

        {/* Gradient PRO Text */}
       
         <motion.img
        src="/images/Pro.png"
        alt="iPhone 17 Pro final"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="relative mx-auto"
      />


        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed"
        >
          The most powerful iPhone ever. Breakthrough battery life.
          <br />
          Our best display ever with Ceramic Shield 2 on the front,
          <br />
          the powerful A19 Pro chip, all 48MP rear cameras and the new
          <br />
          Center Stage front camera.
        </motion.p>
        

        {/* Availability Info */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
          viewport={{ once: true }}
           className="mt-4 text-gray-500 text-lg md:text-xl"
        >
          Pre-order starting at{" "}
          <span className="font-semibold">5:30 PM IST on 12 Sep</span>
          <br />
          Available from <span className="font-semibold">19 Sep</span>
        </motion.p>

        
        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
          viewport={{ once: true }}
          className="mt-8 flex gap-4 justify-center"
        >
          <a href="#"
            className="px-6 py-3 rounded-full border border-blue-600 text-blue-600 font-medium hover:bg-blue-600 hover:text-white  transition transform hover:scale-105">
           Learn more</a>
          <a href="#"
            className="px-6 py-3 rounded-full border border-blue-600 text-blue-600 font-medium hover:bg-blue-600 hover:text-white transition transform hover:scale-105">
            Pre Order
          </a>
        </motion.div>

        <div className="relative mx-auto mt-6 w-screen md:w-[900px]">
      {/* First Image */}
      <motion.img
        src="/images/iphone startframe.png"
        alt="iPhone 17 Pro start"
        initial={{ opacity: 1, scale: 1 }}
        whileInView={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
        className="absolute inset-0 mx-auto"
      />

      {/* Second Image */}
      <motion.img
        src="/images/iphone17pro.png"
        alt="iPhone 17 Pro final"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
        className="relative mx-auto"
      />
    </div>

        

      </div>
    </section>
  );
};

export default VideoHero;
