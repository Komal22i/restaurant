import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ContactFooter = () => {
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
    <>
      <div className="grid grid-cols-2  ">
        <div className="footer-box  flex flex-col items-center justify-center py-6">
          <motion.p
            ref={ref}
            animate={controls}
            variants={textVariants}
            initial={{ y: -30, opacity: 0 }}
            transition={{ duration: 1000 }}
          >
            {" "}
            <img src="images/fancy-border-img.png" className="" />
          </motion.p>

          <motion.p
            ref={ref}
            animate={controls}
            variants={textVariants}
            initial={{ y: -120, opacity: 0 }}
            transition={{ duration: 1000 }}
          >
            {" "}
            <p className="text-[#fff] py-4 font-text tracking-wider leading-loose px-20">
              Join us on this Journey. If you have any questions or want to make
              a reservation, please fill out the following form.
            </p>
          </motion.p>

          <motion.p
            ref={ref}
            animate={controls}
            variants={textVariants}
            initial={{ y: -150, opacity: 0 }}
            transition={{ duration: 1000 }}
          >
            {" "}
            <h6 className="font-vibes text-white text-5xl tracking-normal py-3">
              Saffronirving
            </h6>
          </motion.p>

          <p className="text-[#fff] pt-4 pb-2 font-text tracking-wider leading-loose ">
            CALL ANYTIME +91-8104330050
          </p>

          <p className="text-[#fff] font-text tracking-wider leading-loose ">
            Email: abc@gmail.com
          </p>

          <p className="text-[#fff] font-text tracking-wider leading-loose ">
            Address: 359, Sector 28, Golf Course Road Gurgaon -122001 Haryana
            India
          </p>
        </div>

        <div className="bg-[#e2e2e2] padding">
          <div>
            <motion.p
              ref={ref}
              animate={controls}
              variants={textVariants}
              initial={{ y: -150, opacity: 0 }}
              transition={{ duration: 1000 }}
            >
              {" "}
              <h4 className="font-vibes text-4xl tracking-wide">
                Send us a Message
              </h4>
            </motion.p>

            <motion.p
              ref={ref}
              animate={controls}
              variants={textVariants}
              initial={{ y: -60, opacity: 0 }}
              transition={{ duration: 1000 }}
            >
              {" "}
              <p className="font-text text-xl tracking-wide py-5 text-gray-700">
                Lorem Ipsum is simply dummy text of the printing industry.
              </p>
            </motion.p>
          </div>
          <div className="py-2 font-text">
            <input
              placeholder="Name"
              className="outline-none w-full py-2 rounded px-3  placeholder:text-gray-500"
            />

            <div className="py-5">
              <input
                placeholder="Email"
                className="outline-none w-full py-2 rounded px-3  placeholder:text-gray-500"
              />
            </div>

            <div className="pb-2">
              <input
                placeholder="Phone No."
                className="outline-none w-full py-2 rounded px-3  placeholder:text-gray-500"
              />
            </div>

            <div className="py-3">
              <textarea
                placeholder="Message"
                className="outline-none w-full py-2 rounded px-3 resize-none placeholder:text-gray-500"
              />
            </div>

            <button className="bg-[#000] w-full py-2 rounded text-[#C29332] my-3 font-semibold">
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white text-[#C29332] font-text">
        <p className="text-center py-7 text-xs md:text-base tracking-wide font-bold opacity-90 ">
          Copyright © 2022 All Rights Reserved - Bizzeonline Pvt. Ltd.
        </p>
      </div>
    </>
  );
};

export default ContactFooter;
