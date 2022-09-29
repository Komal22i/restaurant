import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Banner = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const textVariants = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <div>
      <img
        src="/images/footer-back.png"
        className="h-[650px] w-full bg-[#000] relative"
      />

      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="space-y-2  text-center absolute flex  w-full gap-3 bottom-72 font-vibes justify-center items-center tracking-widest text-shadow text-xl lg:text-5xl md:py-3  text-white  font-semibold capitalize">
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 2,
              },
            }}
            transition={{ duration: 1000 }}
          >
            {" "}
            Experience
          </motion.p>

          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 2,
              },
            }}
            transition={{ duration: 1000 }}
          >
            {" "}
            The Journey
          </motion.p>
        </h1>

        <h5 className="text-white absolute font-text bottom-64 tracking-wide text-base text-shadow">
          {" "}
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 2,
              },
            }}
            transition={{ duration: 1000 }}
          >
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </motion.p>
        </h5>

        <div className="flex justify-center items-center absolute bottom-32 gap-20 font-text">
          <motion.p
            ref={ref}
            initial={{ x: 90, opacity: 0 }}
            animate={controls}
            variants={textVariants}
            transition={{ duration: 1000 }}
          >
            {" "}
            <button className="text-white bg-black py-4 px-10 text-base tracking-wider my-8 hover:bg-[#C29332] duration duration-1000">
              Dine In
            </button>
          </motion.p>

          <motion.p
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={controls}
            variants={textVariants}
            transition={{ duration: 1000 }}
          >
            {" "}
            <button className="text-white bg-black tracking-wider py-4 px-10 text-base my-8 hover:bg-[#C29332] duration duration-1000">
              Call Us
            </button>
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

// #C19D60
