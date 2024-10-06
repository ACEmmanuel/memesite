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
        <h1 className="text-4xl lg:text-5xl mx-auto textShadow">TOKENOMICS</h1>

        <div className="max-w-[20rem] sm:max-w-[20rem] text-[18px] md:text-[20px] rounded-md bg-[#D0DEF8] boxShadow p-7 space-y-3">
          <p>100,000,000 Total Supply</p>
          <p>0% Tax</p>
          <p>80% liquidity and LP tokens will be burnt</p>
          <p>10% for team</p>
          <p>5% for CEX</p>
          <p>5% reserved</p>
        </div>
      </motion.section>
    </>
  );
};

export default Tokenomics;
