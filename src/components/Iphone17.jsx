import React from "react";
import { easeInOut, motion } from "framer-motion";

const Iphone17Hero = () => {
  return (
    <section className="relative w-full text-center py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-green-800 bg-clip-text text-transparent"
        >
          iPhone 17
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 text-gray-700 text-lg md:text-xl font-medium leading-relaxed"
        >
          Even more delightful. Even more durable. Our best display ever
          with ProMotion up to 120Hz and the new Ceramic Shield 2 on the
          front. An advanced 48MP Dual Fusion camera system. And the new
          Center Stage front camera.
        </motion.p>

        {/* Availability */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-500 text-lg md:text-xl"
        >
          Pre-order starting at 5:30 PM IST on 12 Sep
          <br />
          Available from 19 Sep
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

        <div className="relative w-full max-w-[700px] mx-auto">
  {/* Fading out image (background layer) */}
  <motion.img
    src="/images/iphone-17-1.jpg"
    alt="iPhone 17 old"
    initial={{ opacity: 1, scale: 0.95, rotateY: -90 }}
    animate={{ opacity: 0, scale: 1, rotateY: 0 }}
    transition={{ duration: 1.2, ease: "easeInOut", delay: 0.7 }}
    className="absolute inset-0 mx-auto w-full z-10"
  />

  {/* Fading in + rolling image (front layer) */}
  <motion.img
    src="/images/iphone-17-2.png"
    alt="iPhone 17 new"
    initial={{ opacity: 0, scale: 0.95, rotateY: 90 }}
    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
    transition={{ duration: 1.2, ease: "easeInOut", delay: 0.7 }}
    className="relative mx-auto w-full z-20 mt-10"
    whileHover={{
      rotateY: [0, 15, -15, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    }}
  />
</div>


      </div>
    </section>
  );
};

export default Iphone17Hero;
