'use client';
import { motion } from 'framer-motion';
import React from 'react';

const Project = ({
  client,
  location,
  tags,
  logo,
  projectName,
}: {
  client: string;
  location: string;
  tags: string;
  logo: React.ReactNode;
  projectName: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false }}
      className='w-full bg-white rounded-[20px] flex flex-col border border-grey-300'
    >
      <div className='flex justify-center items-center h-[200px] md:h-[300px] lg:h-[410px]'>
        {logo}
      </div>
      <div className='border-t border-grey-300 p-5 flex flex-col gap-[10px] md:gap-5'>
        <p className='border border-grey-200 bg-grey-50 rounded-full text-grey-500 text-xs px-2 py-1 w-fit'>
          {tags}
        </p>

        <div className='flex flex-col gap-[10px]'>
          <div className='flex flex-col gap-[5px] text-sm md:text-base leading-[20px] md:leading-[23px] font-semibold'>
            <p className='text-grey-500'>Client:</p>
            <p className='text-grey-700'>{client}</p>
          </div>
          <div className='flex flex-col gap-[5px] text-sm md:text-base leading-[20px] md:leading-[23px] font-semibold'>
            <p className='text-grey-500'>Location:</p>
            <p className='text-grey-700'>{location}</p>
          </div>
          <div className='flex flex-col gap-[5px] md:mt-[10px]'>
            <p className='text-grey-700 text-base leading-[23px] font-semibold'>Project Name:</p>
            <p className='text-sm leading-[20px] font-normal text-grey-800'>{projectName}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
