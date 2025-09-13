import React from "react";
import { motion } from "framer-motion";

const Ipad = () => {
  return (
    <section className="relative h-auto w-screen flex flex-col items-center justify-between text-center overflow-hidden">
      
      {/* Background Gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-100 to-white"
      />

      {/* Text Section (Pinned at Top) */}
       <div className="relative z-10 max-w-6xl flex flex-col items-center justify-center mb-5">
        
        {/* Small Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-lg md:text-4xl font-bold text-black mb-2"
        >
          iPad <span className="text-sky-600 font-semibold">air</span>
        </motion.h2>
      

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-sky-900 mb-10"
        >
          Flight speed
        </motion.h1>
         <p className="text-lg md:text-xl font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-green-800 bg-clip-text text-transparent mb-4">
                Built for Apple Intelligence
         </p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            viewport={{ once: true }}
            className="px-6 py-2 border border-sky-600 text-sky-600 rounded-full font-semibold text-lg md:text-xl hover:bg-sky-600 hover:text-white transition shadow-sm">
        Buy
         </motion.button>

<video
  src="/large_2x.webm"
  autoPlay
  muted
  playsInline
  onEnded={() => console.log("Video finished!")}
  className="w-[70%] md:w-[45%] mx-auto drop-shadow-2xl rounded-xl"
/>

</div>
    </section>
  );
};

export default Ipad;
