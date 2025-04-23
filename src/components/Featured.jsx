import { motion, useAnimation } from "framer-motion";
import React from "react";

function Featured() {
  // Separate animation controllers for each card
  const animationControls = {
    0: useAnimation(),
    1: useAnimation(),
    2: useAnimation(),
    3: useAnimation(),
  };

  // Receives index and animates that card only
  const handleHoverStart = (index) => {
    animationControls[index].start({
      y: "0",
    });
  };
  const handleHoverEnd = (index) => {
    animationControls[index].start({
      y: "100%",
    });
  };

  return (
    <div className="container w-full sm:pt-20 pt-10">
      <div className="w-full px-10 border-b-[1px] border-zinc-900 pb-5">
        <h1 className="text-4xl font-['Poppins'] font-medium sm:text-6xl">Key Features</h1>
      </div>
      <div className="py-10 px-10 cards w-full flex flex-col md:flex-row gap-10">
        <motion.div
          onHoverStart={() => handleHoverStart(0)}
          onHoverEnd={() => handleHoverEnd(0)}
          className="cardcontainer cursor-pointer relative md:w-1/2 w-full h-full"
        >
          <h1 className="mb-4 flex gap-2 items-center tracking-wide">
            <span className="w-2 h-2 bg-zinc-50 rounded-full"></span> Seamless Quiz Creation
          </h1>
          <h1 className="absolute text-[#CDEA68] flex overflow-hidden left-1/2 sm:left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl font-NueueMontreal leading-none tracking-tighter">
            {"CREATION".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={animationControls[0]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-[300px] flex items-center rounded-xl overflow-hidden">
            <img
              className="w-full h-auto object-cover hover:scale-105 transition-all"
              src="https://img.freepik.com/free-photo/high-angle-kid-cheating-school-test_23-2150105088.jpg?t=st=1739623775~exp=1739627375~hmac=34cffa16ce04b3da143290b888332ea04f7997c5a2d82a3f6bdea6272cbeeb4e&w=900"
              alt="featured"
            />
          </div>
        </motion.div>

        <motion.div
          onHoverStart={() => handleHoverStart(1)}
          onHoverEnd={() => handleHoverEnd(1)}
          className="cardcontainer cursor-pointer relative md:w-1/2 w-full h-full"
        >
          <h1 className="mb-4 flex gap-2 items-center tracking-wide">
            <span className="w-2 h-2 bg-zinc-50 rounded-full"></span> Secure Authentication
          </h1>
          <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-1/2 sm:right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl font-NueueMontreal leading-none tracking-tighter">
            {"SECURITY".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={animationControls[1]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-[300px] flex items-center rounded-xl overflow-hidden">
            <img
              className="w-full h-auto object-cover hover:scale-105 transition-all"
              src="https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595835.jpg?ga=GA1.1.2045749872.1724912680&semt=ais_hybrid"
              alt="featured"
            />
          </div>
        </motion.div>
      </div>

      {/* Additional cards with separate controls */}
      <div className="py-10 px-10 cards w-full flex flex-col md:flex-row gap-10">
        <motion.div
          onHoverStart={() => handleHoverStart(2)}
          onHoverEnd={() => handleHoverEnd(2)}
          className="cardcontainer cursor-pointer relative md:w-1/2 w-full h-full"
        >
          <h1 className="mb-4 flex gap-2 items-center tracking-wide">
            <span className="w-2 h-2 bg-zinc-50 rounded-full"></span> Proctoring
          </h1>
          <h1 className="absolute text-[#CDEA68] flex overflow-hidden left-1/2 sm:left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl font-NueueMontreal leading-none tracking-tighter">
            {"DETECTION".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={animationControls[2]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-[300px] flex items-center rounded-xl overflow-hidden">
            <img
              className="w-full h-auto object-cover hover:scale-105 transition-all"
              src="https://plus.unsplash.com/premium_photo-1735775899834-24b5b61bc995?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNoZWF0aW5nJTIwZXhhbXxlbnwwfHwwfHx8MA%3D%3D"
              alt="featured"
            />
          </div>
        </motion.div>

        <motion.div
          onHoverStart={() => handleHoverStart(3)}
          onHoverEnd={() => handleHoverEnd(3)}
          className="cardcontainer cursor-pointer relative md:w-1/2 w-full h-full"
        >
          <h1 className="mb-4 flex gap-2 items-center tracking-wide">
            <span className="w-2 h-2 bg-zinc-50 rounded-full"></span> Detailed Performance Analysis
          </h1>
          <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-1/2 sm:right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl font-NueueMontreal leading-none tracking-tighter">
            {"ANALYSIS".split("").map((item, index) => (
              <motion.span
                initial={{ y: "100%" }}
                animate={animationControls[3]}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                className="inline-block"
                key={index}
              >
                {item}
              </motion.span>
            ))}
          </h1>
          <div className="card w-full h-[300px] flex items-center rounded-xl overflow-hidden">
            <img
              className="w-full h-auto object-cover hover:scale-105 transition-all"
              src="https://plus.unsplash.com/premium_photo-1661443781814-333019eaad2d?q=80&w=2151&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="featured"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Featured;
