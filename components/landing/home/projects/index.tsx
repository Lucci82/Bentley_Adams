'use client';
import { motion } from 'framer-motion';
import ArrowRight from '@/components/svg/arrow-right';
import Button from '@/components/Button';
import React from 'react';
import Project from './project';
import OyoLogo from '@/components/svg/oyo-logo';
import OassLogo from '@/components/svg/oass-logo';
import OndoLogo from '@/components/svg/ondo-logo';
import Link from 'next/link';

const Projects = () => {
  const projectItems = [
    {
      title: 'Project Overview',
      description: 'Consultancy for the Shop Drawing production for 6Nos Culverts.',
      tags: 'Flood Control',
      logo: <OyoLogo />,
    },
    {
      title: 'Project Overview',
      description:
        'Design and Supervision Consultant for Road Engineering Works and Related Services.',
      tags: 'Project Management',
      logo: <OassLogo />,
    },
    {
      title: 'Project Overview',
      description:
        'Design and Supervision Consultant for Road Engineering Works and Related Services.',
      tags: 'Project Management',
      logo: <OndoLogo />,
    },
  ];

  return (
    <div className='bg-[#26292E] py-[50px] md:py-16 px-4 md:px-10 lg:px-20 flex flex-col gap-[30px] md:gap-[64px]'>
      <div className='flex flex-col md:flex-row justify-between md:items-end gap-5'>
        <div>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='text-[40px] md:text-[56px] leading-[48px] md:leading-[59px] font-semibold text-grey-100'
          >
            Projects
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            className='text-grey-200 text-base font-normal leading-[23px] max-w-[500px] md:mt-5'
          >
            Here are some of the projects that have been entrusted to us. We delivered more than the
            client expected of course.
          </motion.p>
        </div>
        <Link href='/projects'>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button className='bg-white text-grey-900'>
              View all projects
              <ArrowRight />
            </Button>
          </motion.div>
        </Link>
      </div>
      <motion.div
        className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[10px] md:gap-[25px] 2xl:gap-20'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {projectItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
            viewport={{ once: false }}
          >
            <Project {...item} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
