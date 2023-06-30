import React from 'react'
import { Tilt } from 'react-tilt'

import { motion } from "framer-motion"
import { styles } from '../styles'
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"





const ProjectCard = ({ 
  index,
  name,
  description,
  ProblemsFaced,
  tags,
  image,
  source_code_link }) => {
  return (
    <motion.div >

      <div

        options={{
          max: 45,
          scale: 1,
          speed: 600
        }}
        className="bg-tertiary p-5 rounded-2xl 
      md:w-[360px]  h-full w-full">
        <div className="relative w-full 
        h-[230px]">

          <img
            src={image}
            alt="project image"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* //to show something over our image we us inset-0 */}
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>

            

          </div>

        </div>
        
        <div className="mt-5">
        <div className='flex justify-between'>

        
          <h3 className="text-white font-bold text-[24px]">{name}</h3>


          <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-pink-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">

              <img src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain" />

            </div>
          </div>
          <h5 className='pt-3 text-gray-400'>Description : </h5>
          <p className="mt-2 text-seconadry text-[14px]" >{description}</p>
          <h5 className='pt-5 text-gray-400'>My Experiences and Difficulties Faced : </h5>
          <p className="mt-2 text-seconadry text-[14px]" >{ProblemsFaced}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tags.name} className={`text-[14px] 
  ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
const Works = () => {
  return (
    <>
      <motion.div >
        <p className={`${styles.sectionSubText}`}>My Work</p>
        <h2 className={`${styles.sectionHeadText}`}>
          <span className="text-green-500">P</span>
          <span className="text-orange-500">r</span>
          <span className="text-purple-500">O</span>
          <span className="text-yellow-500">J</span>
          <span className="text-green-500">E</span>
          <span className="text-orange-500">c</span>
          <span className="text-purple-500">t</span>
          <span className="text-yellow-500">S</span>
          <span className="text-purple-500">.</span>
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p

          
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          All These Projects that u will venture into within next few minutes are Created By me while learning and making them even much better by using those learnings,
            React.js, Three.js, express, mongoDB, Atlas mongoose, Tailwind CSS and Loads of libraries 
          All these are blends of modern React-Tech
          and they Highlight the Power Of WEB-DEV using which we can create what we imagine .
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (<ProjectCard
          key={`project-${index}`}
          index={index}
          {...project}
        />
        ))}
      </div>
    </>
  )
}
export default SectionWrapper(Works, "")