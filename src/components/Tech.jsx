import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <motion.div variants={fadeIn("up", "spring", index * 0.1, 0.75)}>
          <Tilt
            options={{
              max: 10,
              scale: 1,
              speed: 450,
            }}
            className="w-28 h-28 rounded-2xl bg-tertiary flex items-center justify-center p-5 shadow-md mb-2"
          >
            <img className="object-cover rounded-md" src={technology.icon} />
          </Tilt>
          <h3 className="text-center line-clamp-1 text-secondary">
            {technology.name}
          </h3>
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
