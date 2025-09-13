import React from "react";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-6">
      {/* Apple Logo / Animation / Video */}
      <video
        className="w-[250px] md:w-[400px] lg:w-[800px] object-contain"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Text */}
      <div className="mt-1 gap-0 max-w-4xl">
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-medium">
          Get to know the next generation of iPhone — iPhone 17 Pro, iPhone 17
          and the all-new iPhone Air. Explore the new AirPods Pro 3 featuring
          the world’s best in-ear Active Noise Cancellation. And discover the
          latest Apple Watch family, which provides more powerful health
          insights than ever.
        </p>
      </div>

           {/* Button */}
      <div className="mt-10">
        <a
          href="#"
          className="px-8 py-3 rounded-full border border-white text-white text-lg font-medium hover:bg-white hover:text-black transition"
        >
          Watch the event
        </a>
      </div>

       <video
        className="w-[250px] md:w-[400px] lg:w-[800px] object-contain"
        src
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
};

export default HeroSection;


