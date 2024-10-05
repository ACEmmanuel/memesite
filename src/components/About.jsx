import React from 'react'
import { motion } from 'framer-motion'

const About = () => {


  return (
    <>

        <motion.section className='flex flex-col gap-5 p-6 mt-[5rem] mx-auto w-fit font-perm'
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: 'easeOut' }} 
        viewport={{ once: true, amount: 0.2 }}
        >

            <h1 className='text-3xl mx-auto'>ABOUT</h1>
            
            <div className='flex flex-col md:flex-row gap-3'>
                <div className='max-w-[20rem] sm:max-w-[35rem] text-[1rem] md:text-[18px] rounded-md bg-[#D0DEF8] p-5'>
                    The "Cat of Satoshi" teaches that true financial freedom means being patient and disciplined instead of chasing after flashy things like expensive cars or succumbing to market trends. By staying focused, the Cat shows others how to succeed in a volatile market. It cuts through distractions and reveals the way to long-term prosperity.
                </div>

                
            </div>
        </motion.section>

    </>
  )
}

export default About