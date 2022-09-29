import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const OnlineBook = () => {
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

  const stepVariants = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <div
      className="h-[500px] w-full bg-cover bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url("images/contact-footer3.png")`,
      }}
    >
      <div className="pt-36 ">
        <motion.p
          ref={ref}
          animate={controls}
          variants={textVariants}
          initial={{ x: -10, opacity: 0 }}
          transition={{ duration: 1000 }}
        >
          {" "}
          <h4 className="text-5xl text-white capitalize font-vibes text-shadow">
            Lorem Ipsum{" "}
          </h4>
        </motion.p>

        <motion.p
          ref={ref}
          animate={controls}
          variants={textVariants}
          initial={{ x: -90, opacity: 0 }}
          transition={{ duration: 1000 }}
        >
          {" "}
          <p className="text-white py-3 font-medium font-text tracking-widest leading-loose text-shadow2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </motion.p>

        <div className="flex justify-center items-center gap-20 font-text">
          <motion.p
            ref={ref}
            initial={{ x: 90, opacity: 0 }}
            animate={controls}
            variants={textVariants}
            transition={{ duration: 1000 }}
          >
            {" "}
            <button className="text-white bg-black py-4 px-10 text-base tracking-wider my-8 hover:bg-[#C29332] duration duration-1000">
              Order Online
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
              Reservations
            </button>
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default OnlineBook;
