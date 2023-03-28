import React from 'react'
import Tilt from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { linkedin, github, ig } from "../assets";

const ServiceCard = ({index, title, icon})=>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div option={{ 
          max: 45,
          scale: 1, 
          speed:450
         }}
         className="bg-tertiary rounded-[20px] py-5 px-12
         min-h-[280px] flex flex-col items center justify-center"
         >
          <img src={icon} alt={title} 
          className="w-25 h-16 object-contain"/>

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview</h2>
        </motion.div>

        <motion.p className='flex gap-3'>
        <a href="https://www.linkedin.com/in/irvan-wijaya/" target="_blank"><img src={linkedin} style={{height:'40px'}}/></a>
        <a href="https://github.com/Irvan-Wijaya" target="_blank"><img src={github} style={{height:'40px'}}/></a>
        <a href="https://www.instagram.com/irvaanwijaya/" target="_blank"><img src={ig} style={{height:'40px'}}/></a>
        </motion.p>

        <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
        I am an active BINUS University student studying computer science with aspirations of becoming 
        an application developer and designer. I am also a self-taught mobile application developer 
        because I want to create mobile accessibility for daily activities. As a developer, 
        I was required of me to be a problem solver and meticulous. I also wanted to gain experience, 
        make connections, and collaborate.
        </motion.p>

        <div className='mt-20 flex flex-wrap gap-10'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
      </div>
    </>
    

  )
}

export default SectionWrapper(About, "about")