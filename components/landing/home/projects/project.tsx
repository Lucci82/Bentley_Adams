'use client';
import { motion } from 'framer-motion';
import React from 'react';

const Project = ({
  title,
  description,
  tags,
  logo,
}: {
  title: string;
  description: string;
  tags: string;
  logo: React.ReactNode;
}) => {
  return (
    <motion.div
      className='w-full bg-white rounded-[20px] h-[400px] xl:h-[516px] flex flex-col'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className='flex-1 flex justify-center items-center'>{logo}</div>
      <div className='border-t border-grey-300 p-5 flex flex-col gap-[10px] md:gap-[30px]'>
        <p className='border border-grey-200 bg-grey-50 rounded-full text-grey-500 text-xs px-2 py-1 w-fit'>
          {tags}
        </p>
        <div className='flex flex-col gap-[10px]'>
          <p className='text-grey-700 text-lg leading-[24px] font-semibold'>{title}</p>
          <p className='text-sm leading-[20px] font-normal text-grey-800'>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
