import React, { useContext } from "react";
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { CursorContext } from "./context/CursorContext";
import { motion } from "framer-motion";

const App = () => {
  const { cursorVariants, cursorBg } = useContext(CursorContext);

  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
      {/* <motion.div
        variants={cursorVariants}
        animate={cursorBg}
        className="w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full"
      ></motion.div> */}
    </>
  );
};

export default App;
