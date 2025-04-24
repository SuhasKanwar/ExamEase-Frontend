import React from "react";
import { motion } from "motion/react";
const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-15 rounded-tl-2xl rounded-tr-2xl bg-[#004d43]">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
          className='text-[9vw] leading-none font-["Anton"] font-medium uppercase mb-5 pt-6 pr-20'
        >
          Knowledge is power! Keep learning and keep testing yourself! 
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
          className='text-[9vw] leading-none font-["Anton"] uppercase font-medium mb-5 pt-6 pr-20 '
        >
          Knowledge is power! Keep learning and keep testing yourself! 
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
