import React from "react";
import { motion } from "framer-motion";

const IphoneAirHero = () => {
  return (
    <section className="relative h-full w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-white">
      {/* Animated Background Gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl flex flex-col items-center">
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-semibold mb-6"
        >
          <span className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            iPhone Air
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-700 text-lg md:text-xl font-medium leading-relaxed mb-6"
        >
          The thinnest iPhone ever with the power of pro inside. More durable than
          any previous iPhone. Our best display ever with Ceramic Shield 2 on the
          front. The powerful A19 Pro chip. An advanced 48MP Fusion camera system.
          And the new Center Stage front camera.
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

            {/* Availability Info */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-500 text-lg md:text-xl"
        >
          Pre-order starting at 5:30 PM IST on 12 Sep
          <br />
          Available from 19 Sep
        </motion.p>


{/* Product Images */}
<div className="relative w-full max-w-[700px] mb-6">
  {/* Start iPhone image (fades out + rolls) */}
  <motion.img
    src="/images/air-centre-1.png"
    alt="iPhone Air start"
    initial={{ opacity: 2, scale: 1, rotate: 0, y: 0 }}
    animate={{ opacity: 0, scale: 1.05, rotate: 10, y: -10 }}
    transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
    className="absolute inset-0 mx-auto w-full z-10"
  />

  {/* Final iPhone image (fades in + rolls + subtle floating) */}
  <motion.img
    src="/images/air-centre.png"
    alt="iPhone Air final"
    initial={{ opacity: 0, scale: 0.95, rotate: -5, y: 10 }}
    animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
    transition={{ duration: 1.2, ease: "easeInOut", delay: 0.7 }}
    className="relative mx-auto w-full z-20"
    whileHover={{ y: [-2, 2, -2], rotate: [-1, 1, -1], transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
  />
</div>


    
   
      </div>
    </section>
  );
};

export default IphoneAirHero;
