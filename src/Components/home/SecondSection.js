import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const SecondSection = () => {
  const squareVariants = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
  };
  const textVariants = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="bg-[#000] p-[100px]">
      <div className="grid grid-cols-2 gap-10">
        <div className="relative z-[5]">
          <div>
            <img
              src="images/cube.png"
              className="absolute left-52  animate-bounce duration-[7000s]"
            />
          </div>

          <motion.p
            ref={ref}
            animate={controls}
            initial={{ x: -200, opacity: 0 }}
            variants={textVariants}
            transition={{ duration: 1000 }}
          >
            {" "}
            <p className=" text-[#aeafb0] leading-loose pt-36 font-text tracking-widest">
              <span className="text-white ">
                {" "}
                A QUEST FOR AUTHENTIC RECIPES{" "}
              </span>
              AND THEIR INGREDIENTS FROM THE VAST & MULTI-CULTURAL SUBCONTINENT
              OF INDIA LED TO THE INCEPTION OF AN IDEA BY THE OWNERS TO PLAN{" "}
              <span className="text-white ">
                {" "}
                A CULINARY JOURNEY ACROSS THE COUNTRY.
              </span>
            </p>
            <div className="flex gap-4 pt-8 px-20 font-text">
              <button className="bg-[#C29332] px-8 py-3 hover:bg-black hover:text-[#C29332]">
                MENU
              </button>
              <button className="border border-[#999997] text-[#999997] w-full hover:bg-[#999997] hover:text-[#fff]">
                THE JOURNEY
              </button>
            </div>
          </motion.p>

          <div>
            <img
              alt="image"
              src="images/wave.png"
              className="absolute -left-28 -bottom-20 animate-bounce"
            />
          </div>
        </div>

        <motion.p
          ref={ref}
          animate={controls}
          initial={{ x: 100, opacity: 0 }}
          variants={squareVariants}
          transition={{ duration: 1000 }}
        >
          {" "}
          <img src="images/about-part.jpg" className="rounded-lg h-[90%]" />
        </motion.p>
      </div>
    </div>
  );
};

export default SecondSection;
