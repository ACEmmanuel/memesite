import React from 'react';
import { motion } from 'framer-motion';

const Tokenomics = () => {
  return (
    <>
      <motion.section
        className="flex flex-col gap-5 p-6 mt-[2rem] mx-auto w-fit font-bold font-perm"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: 'easeOut' }} 
        viewport={{ once: true, amount: 0.7 }}
      >
        <h1 className="text-4xl lg:text-5xl mx-auto underline">TOKENOMICS</h1>

        <div className='flex flex-col md:flex-row gap-5 '>

        <img src="./cat3.png" className='order-2 md:order-1'/>

          <ul className="max-w-[20rem] sm:max-w-[20rem] text-[18px] md:text-[20px] rounded-md bg-[#D0DEF8] boxShadow p-7 space-y-3 order-1 md:order-2 list-disc pl-10">
            <li>100,000,000 Total Supply</li>
            <li>0% Tax</li>
            <li>80% liquidity and LP tokens will be burnt</li>
            <li>10% for team</li>
            <li>5% for CEX</li>
            <li>5% reserved</li>
          </ul>
        </div>
      </motion.section>
    </>
  );
};

export default Tokenomics;
