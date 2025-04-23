import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "motion/react";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-35 px-20 space-y-2">
        {["Welcome To", "The Online", "Examination System"].map(
          (item, index) => {
            return (
              <div className="masker">
                <div className="w-fit flex items-end overflow-hidden">
                  {index == 1 && (
                    <motion.div
                      initial={{ width: 0, rotate: 0 }}
                      animate={{ width: "7.5vw", rotate: 360}}
                      transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                      className="mr-[1vw] w-[7.5vw] rounded-md h-[6.3vw] relative bg-green-500 "
                    ></motion.div>
                  )}
                  <h1 className="pt-[.7vw] -mb-[.4vw] uppercase text-[7vw] leading-none font-['Anton'] font-normal ">
                    {item}
                  </h1>
                </div>
              </div>
            );
          }
        )}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20 ">
        {[
          "Revolutionizing Online Examinations",
          "Secure. Flexible. Reliable.",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-3">
          <div className="px-4 py-2 border-[1px] border-zinc-500 font-light text-sm uppercase rounded-full ">
            start the exam
          </div>
          <div className="w-8 h-8 flex items-center justify-center border-[2px] border-zinc-500 rounded-full ">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
