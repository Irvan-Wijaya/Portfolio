import React from "react";
import {motion} from 'framer-motion'
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
  <>
    <motion.div>
        <p className={`${styles.sectionHeadText} text-center`}>
          Try it! &#10024;
        </p>
        <h2 className={`${styles.sectionSubText} text-center mb-5`}>
          Interact the ball
        </h2>
      </motion.div>

    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  </>
  );
};

export default SectionWrapper(Tech, "tech");