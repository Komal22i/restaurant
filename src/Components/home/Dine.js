import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Dine = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const textVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <div className="h-[500px] w-full bg-cover bg-no-repeat bg-fixed bg-[#212121]">
      <div className="grid grid-cols-2">
        <div>
          <img src="images/dine.png" className="w-full h-[500px]" />
        </div>
        <div className="py-20">
          <motion.p
            ref={ref}
            animate={controls}
            variants={textVariants}
            initial={{ y: -50, opacity: 0 }}
            transition={{ duration: 1000 }}
          >
            {" "}
            <h4 className="font-vibes text-5xl text-white text-shadow">
              Lorem Ipsum{" "}
            </h4>
          </motion.p>

          <motion.p
            ref={ref}
            animate={controls}
            variants={textVariants}
            initial={{ y: -90, opacity: 0 }}
            transition={{ duration: 1000 }}
          >
            {" "}
            <p className="text-center font-text px-20 text-white tracking-widest py-10">
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged
            </p>
          </motion.p>

          <motion.p
            ref={ref}
            animate={controls}
            variants={textVariants}
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 1000 }}
          >
            {" "}
            <p className="text-center font-text px-20 text-white tracking-widest ">
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged
            </p>
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Dine;
