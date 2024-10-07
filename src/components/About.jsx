import React from 'react'
import { motion } from 'framer-motion'

const About = () => {


  return (
    <>
        {/* <div className=' w-full bg-white pb-5'> */}
        <motion.section className='flex flex-col gap-5 p-6 mt-[5rem] mx-auto w-fit font-perm font-bold'
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: 'easeOut' }} 
        viewport={{ once: true, amount: 0.2 }}
        >

            <h1 className='text-4xl lg:text-5xl mx-auto textShadowBlue'>ABOUT</h1>
            
            <div className='flex flex-col md:flex-row gap-3 boxShadow'>
                <div className='max-w-[20rem] sm:max-w-[35rem] text-[18px] md:text-[20px] rounded-md bg-[#D0DEF8] p-5'>
                    The "Cat of Satoshi" teaches that true financial freedom means being patient and disciplined instead of chasing after flashy things like expensive cars or succumbing to market trends. By staying focused, the Cat shows others how to succeed in a volatile market. It cuts through distractions and reveals the way to long-term prosperity.
                </div>

                
            </div>
        </motion.section>
        {/* </div> */}
    </>
  )
}

export default About