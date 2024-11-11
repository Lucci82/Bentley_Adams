'use client'
import { motion } from 'framer-motion';
import ArrowLeft, { ArrowRight } from '@/components/svg/arrow-left';
import CEOLogo from '@/components/svg/ceo-logo';
import React from 'react';

const ClientOpinion = () => {
  return (
    <div className='bg-[#F9FAFB] px-4 py-[50px] md:py-16 md:px-20 w-full'>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: false }}
        className='text-start md:text-center text-grey-800 font-semibold leading-[48px] md:leading-[56px] text-[40px] md:text-[56px] pb-[30px]'
      >
        Our client&apos;s opinions
      </motion.h2>
      <div className='flex overflow-auto sm:justify-center sm:items-center gap-5 w-full scrollbar-hide'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          whileHover={{ scale: 1.1 }}
          viewport={{ once: false }}
          className='p-[10px] bg-white border border-grey-100 h-fit rounded-[4px] hidden cursor-pointer lg:block'
        >
          <ArrowLeft />
        </motion.div>
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 50 * (i === 0 ? -1 : 1) }} // Slide from left or right
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: i * 0.3, ease: 'easeOut' }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: false }}
            className='bg-white border rounded-[5px] border-grey-200 p-5 w-fit flex gap-[10px] flex-col flex-shrink-0 md:flex-shrink'
          >
            <div className='flex justify-between items-center'>
              <CEOLogo />
              <div>
                <p className='text-sm md:text-base leading-[23px] text-grey-600'>Adam Bentley</p>
                <p className='uppercase text-grey-500 text-[10px] leading-[12px]'>Ceo Logo name</p>
              </div>
            </div>
            <p className='text-grey-800 max-w-[260px] md:max-w-[415px] text-sm md:text-lg leading-[26px]'>
              We have worked with various companies but none of them give as much value back for the
              money paid like Bentley Adams. I’ll definitely be back with more contracts!
            </p>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          whileHover={{ scale: 1.1 }}
          viewport={{ once: false }}
          className='p-[10px] bg-white border border-grey-100 h-fit rounded-[4px] hidden cursor-pointer lg:block'
        >
          <ArrowRight />
        </motion.div>
      </div>
    </div>
  );
};

export default ClientOpinion;
