import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle menu open/close
  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMenuOpen]);




  return (
    <>
      <header className="fixed top-0 w-full backdrop-blur-sm z-[888] md:px-5">
        <div className="flex justify-between items-center py-5 px-6 flex-nowrap uppercase font-bold font-perm  text-lg text-white">
          <p className="text-2xl md:text-3xl">$Catoshi</p>

          <div className="hidden lg:flex justify-evenly items-center gap-6">
            <p>home</p>
            <p>about</p>
            <p>tokenomics</p>
            <p>roadmap</p>
            <p>how to buy</p>
            <motion.a
              whileHover={{ scale: 1.1 }}
              className="bg-blue-600 px-4 py-2 rounded-md cursor-pointer"
              href="https://youtu.be/L8XbI9aJOXk?si=VIgEHuYMtx-Z19NA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className='uppercase'>buy now</button>
            </motion.a>
          </div>

          {/* Menu Bar */}
          <div
            className="lg:hidden hover:bg-[#dddcdc2c] rounded-sm"
            onClick={openMenu}
          >
            <svg
              className="w-9 h-9 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </div>
        </div>
      </header>



      {/* Backdrop and Sliding Menu for Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[1000] bg-black bg-opacity-50" // Increased z-index to be above everything
            onClick={openMenu} // Close the menu when backdrop is clicked
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }} // Faster exit animation for backdrop
          >
            <motion.div
              className="fixed top-0 right-0 w-[90%] h-full text-[18px] bg-[#f0eeee] p-4 z-[1003] space-y-7 pt-14 font-bold font-perm uppercase backdrop-blur-md" // High z-index for the menu as well
              initial={{ x: '100%' }} // Start fully off-screen
              animate={{ x: '10%' }} // Slide in
              exit={{ x: '100%', transition: { duration: 0.3 } }} // Faster exit animation for menu
              transition={{ type: 'spring', stiffness: 200 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
            >
              <p>home</p>
              <p>about</p>
              <p>tokenomics</p>
              <p>roadmap</p>
              <p>
              <motion.a
              whileHover={{ scale: 1.1 }}
              className="text-blue-600 rounded-md cursor-pointer"
              href="https://youtu.be/L8XbI9aJOXk?si=VIgEHuYMtx-Z19NA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className='uppercase'>buy now</button>
            </motion.a>
            </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
