import React from "react";
import WomanImg from "../img/contact/woman.png";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: "0" }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: "0" }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
            className="hidden lg:flex bg-[#c7f1fa] absolute bottom-0 left-0 right-0 top-52 -z-10"
          ></motion.div>
          <div>
            <div className="lg:flex-1 lg:pt-32 px-4">
              <h1 className="1">Contact me</h1>
              <p className="mb-12">I would love to get suggestions from you</p>
              <form className=" flex flex-col gap-y-4">
                <div className="flex gap-x-10">
                  <input
                    type="text"
                    className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                    placeholder="your name"
                  />
                  <input
                    type="text"
                    className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                    placeholder="your email address"
                  />
                </div>
                <input
                  type="text"
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  placeholder="your message"
                />
                <button className="btn mb-[30px] mx-auto lg:mx-0 self-start">
                  Send it
                </button>
              </form>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: "0" }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ transition: transition1, duration: 2 }}
            className="lg:flex-1 lg:max-h-[42rem]"
          >
            <img src={WomanImg} alt="" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
