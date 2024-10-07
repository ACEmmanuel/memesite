import React from 'react';
import { motion } from 'framer-motion';

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

const Footer = () => {
  return (
    <>
      <motion.section
        className="max-auto w-full font-bold font-perm mt-[2rem] mb-[7rem]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
      >
        <h1 className="text-center text-4xl lg:text-5xl underline">JOIN US</h1>

        <motion.div
          className="flex flex-row w-fit gap-8 mx-auto mt-5"
          variants={containerVariants}
        >
          {/* Twitter */}
          <motion.div variants={itemVariants}>
            <svg
              width={'3rem'}
              height={'3rem'}
              fill="white"
              className='md:h-[4rem] md:w-[4rem] bg-[#3479F8] size-full p-3 rounded-md'
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </motion.div>

          {/* Telegram */}
          <motion.div variants={itemVariants}>
            <svg
              width={'3rem'}
              height={'3rem'}
              fill="white"
              className='md:h-[4rem] md:w-[4rem] bg-[#3479F8] size-full p-3 rounded-md'
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
            </svg>
          </motion.div>

          {/* Facebook */}
          <motion.div variants={itemVariants}>
            <svg
              width={'3rem'}
              height={'3rem'}
              fill="white"
              className='md:h-[4rem] md:w-[4rem] bg-[#3479F8] size-full p-3 rounded-md'
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
            </svg>
          </motion.div>

          {/* Youtube */}
          <motion.a variants={itemVariants} href=''>

            <svg
            width={'3rem'}
            height={'3rem'}
            fill="white"
            href="https://youtu.be/L8XbI9aJOXk?si=VIgEHuYMtx-Z19NA"
            target="_blank"
            rel="noopener noreferrer"
            className='md:h-[4rem] md:w-[4rem] bg-[#3479F8] size-full p-3 rounded-md'
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
            </svg>

          </motion.a>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Footer;
