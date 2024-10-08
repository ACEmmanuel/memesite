import React, {useState} from 'react';
import { motion } from 'framer-motion';

//Import Components & Icon
import Contract from './Contract';

const Hero = () => {

  const [copied, setCopied] = useState(false);
  const contractAddress = '6WNva7iLjTvxSfXPSmbjceW5Yc41LUH4SJNqKom5pump';

  // Define the bounce animation
  const bounceAnimation = {
    // Set the initial state of the element
    initial: { y: 0 },
    // Set the animation state
    animate: {
      y: [0, -15, 0], // Move up by 15px and then back to 0
      transition: {
        duration: 1, // Duration of one cycle
        ease: 'easeInOut', // Smooth easing
        repeat: Infinity, // Repeat infinitely
      },
    },
  };

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


const copyText = () => {
  navigator.clipboard.writeText(contractAddress).then(() => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
  });
}





  return (
    <>
    <section className='sun-gradient pt-[5rem] md:pt-[3rem] lg:pt-[2.5rem] pb-[3rem]'>

      <div className='flex justify-center items-center flex-col lg:flex-row flex-nowrap font-bold font-perm mx-auto px-2 w-fit'>

        <div className='mx-auto relative'>
          <p className='text-[4.5rem] md:text-[8rem] textShadow text-center'>CATOSHI</p>
          <span
            className='absolute top-[5rem] md:top-[9rem] right-0 text-[1.5rem] md:text-[2rem] animate-bounce '> on SOLANA </span>

          {/* Contract Address */}
          <Contract contractAddress={contractAddress} copied={copied} copyText={copyText} stylee={'hidden md:flex mt-2 lg:mt-4'} /> 
      
        </div>

        <div>
        <div className="relative w-fit">
          {/* First Image (Default) */}
          <img
            src='./cat.png' 
            className='size-[22rem] md:size-[30rem] object-cover w-fit mt-[-1rem] lg:mt-0 transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0' 
            alt='Cat 1' 
          />

          {/* Second Image (On Hover) */}
          <img 
            src='./cat2.png' 
            className='size-[22rem] md:size-[30rem] object-cover w-fit mt-[-1rem] lg:mt-0 absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100' 
            alt='Cat 2' 
          />
        </div>
        </div>
        
      </div>






    {/* Contract Address */}
    <Contract contractAddress={contractAddress} copied={copied} copyText={copyText} stylee={'flex md:hidden'} />






      {/* Hero Logos */}
      {/* bg-[#A8C1E6] */}

      <motion.section
        className="mx-auto rounded-md font-perm w-fit"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={containerVariants}
      >
        

        <motion.div
          className="flex flex-row flex-wrap gap-5 mx-auto mt-5 w-full"
          variants={containerVariants}
        >
          {/* Twitter */}
          <motion.div variants={itemVariants}>
            <svg
              
              width={'2.5rem'}
              height={'2.5rem'}
              className='md:h-[4rem] md:w-[4rem] bg-white size-full p-2 rounded-md'
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </motion.div>

          {/* Telegram */}
          <motion.div variants={itemVariants}>
            <svg
              
              width={'2.5rem'}
              height={'2.5rem'}
              className='md:h-[4rem] md:w-[4rem] bg-white size-full p-2 rounded-md'
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
            </svg>
          </motion.div>

          {/* Facebook */}
          <motion.div variants={itemVariants}>
            <svg
              
              width={'2.5rem'}
              height={'2.5rem'}
              className='md:h-[4rem] md:w-[4rem] bg-white size-full p-2 rounded-md'
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
            </svg>
          </motion.div>

           {/* Telegram */}
           <motion.div variants={itemVariants}>
            <svg
              
              width={'2.5rem'}
              height={'2.5rem'}
              className='md:h-[4rem] md:w-[4rem] bg-white size-full p-2 rounded-md'
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
            </svg>
          </motion.div>

        </motion.div>
      </motion.section>
    </section>

      {/* <p className='bg-white px-2 w-fit p-4 rounded-full mx-auto font-perm lg:text-[1.5rem] '>6WNva7iLjTvxSfXPSmbjceW5Yc41LUH4SJNqKom5pump</p> */}

    </>
  );
};

export default Hero;


// 6WNva7iLjTvxSfXPSmbjceW5Yc41LUH4SJNqKom5pump
