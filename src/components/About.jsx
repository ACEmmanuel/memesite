import React from 'react'
import { motion } from 'framer-motion'

//Import Components
import Background from './Background'

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

const About = () => {


  return (
    <>

    <motion.h1
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={containerVariants}
    className="text-center text-4xl lg:text-5xl underline w-fit mx-auto font-perm font-bold mt-[5rem]">ABOUT CATOSHI</motion.h1>

        <motion.section className='flex flex-col gap-5 p-6 mt-5 mx-auto w-fit font-perm font-bold'
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: 'easeOut' }} 
        viewport={{ once: true, amount: 0.2 }}
        >

            {/* <h1 className='text-4xl lg:text-5xl mx-auto underline'>ABOUT</h1> */}
            
            <div className='flex flex-col md:flex-row gap-3 '>
                <div className='max-w-[20rem] sm:max-w-[35rem] text-[18px] md:text-[20px] rounded-md bg-[#D0DEF8] p-5 boxShadow'>
                    The "Cat of Satoshi" teaches that true financial freedom means being patient and disciplined instead of chasing after flashy things like expensive cars or succumbing to market trends. By staying focused, the Cat shows others how to succeed in a volatile market. It cuts through distractions and reveals the way to long-term prosperity.
                </div>

                <img src="./cat2.png" className=''/>
            </div>
        </motion.section>
    </>
  )
}

export default About