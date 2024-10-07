import React from 'react';
import { motion } from 'framer-motion';

import Card from './Card';
import content from './content'; // Ensure content is an array of objects with unique IDs

// Define animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time between each child's animation
      delayChildren: 0.3,   // Delay before the first child starts
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const HowToBuy = () => {
  return (
    <>


    <motion.h1
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={containerVariants}
    className="text-center text-4xl lg:text-5xl underline w-fit mx-auto font-perm font-bold mt-[5rem]">
      JOIN US
      </motion.h1>
      
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className=' font-perm font-bold'
    >

      <div className='flex flex-col lg:flex-row flex-wrap w-fit mx-auto mt-5 font-perm font-bold'>
      {
        content.map((item) => {
          const { id, text } = item;
          return ( 
            <motion.div key={id} variants={itemVariants}>
              <Card text={text} num={id}/>
            </motion.div>
          );
        })
      }
      </div>
    </motion.section>
    </>
  );
}

export default HowToBuy;
