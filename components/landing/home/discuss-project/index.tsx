'use client';
import { motion, useInView } from 'framer-motion';
import Button from '@/components/Button';
import Settings from '@/components/svg/settings';
import React, { useRef } from 'react';
import Background from '@/assets/images/background.png';
import { StaticImage } from '@/components/static-image';

const DiscussProject = () => {
  const settingsRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  const isSettingsInView = useInView(settingsRef, { once: false, margin: '0px 0px' });
  const isParagraphInView = useInView(paragraphRef, { once: false, margin: '0px 0px' });
  const isButtonInView = useInView(buttonRef, { once: false, margin: '0px 0px' });

  return (
    <div className='flex justify-center items-center bg-[#001633] p-[10px] md:p-[50px] w-full'>
      <div className='relative flex-1'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isSettingsInView ? 1 : 0, y: isSettingsInView ? 0 : 30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='flex flex-col justify-center items-center px-[16px] py-[80px] md:p-[60px] rounded-[20px] h-full !w-full gap-4 relative z-[10]'
          ref={settingsRef}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isSettingsInView ? 1 : 0, y: isSettingsInView ? 0 : 30 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Settings />
          </motion.div>

          <motion.p
            className='text-[42px] md:text-[72px] leading-[46px] md:leading-[86px] text-center font-semibold text-grey-50 max-w-[662px] mt-1'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isParagraphInView ? 1 : 0, y: isParagraphInView ? 0 : 30 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            ref={paragraphRef}
          >
            Let&apos;s Engineer Your Next Success Story
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isButtonInView ? 1 : 0, y: isButtonInView ? 0 : 30 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            ref={buttonRef}
          >
            <Button>Discuss your project</Button>
          </motion.div>
        </motion.div>

        <div className='absolute h-full w-full top-0 left-0'>
          <StaticImage
            alt='bg-image'
            src={Background}
            fill={false}
            imageClassName='w-full h-full object-cover rounded-[20px]'
            className='w-full h-full'
          />
        </div>
      </div>
    </div>
  );
};

export default DiscussProject;
