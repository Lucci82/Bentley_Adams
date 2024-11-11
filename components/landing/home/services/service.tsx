'use client';
import { motion } from 'framer-motion';
import Button from '@/components/Button';
import { StaticImage } from '@/components/static-image';
import { cn } from '@/components/utils/helpers';
import { StaticImageData } from 'next/image';
import React from 'react';

const Service = ({
  title,
  detail,
  image,
  isReverse,
}: {
  title: string;
  detail: string;
  image: StaticImageData;
  isReverse: boolean;
}) => {
  return (
    <motion.div
      className={cn(
        'flex justify-between text-grey-800 md:border border-grey-300 rounded-[5px] md:rounded-[20px]',
        isReverse ? 'flex-col-reverse sm:flex-row-reverse' : 'flex-col-reverse sm:flex-row'
      )}
      initial={{ opacity: 0, x: isReverse ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div
        className={cn(
          'bg-grey-50 flex-1 rounded-[5px] md:rounded-[20px] flex justify-center items-center md:p-5',
          isReverse ? '!rounded-l-[0px]' : '!rounded-r-[0px]'
        )}
      >
        <div
          className={cn(
            'bg-white border border-grey-300 md:!rounded-[5px] px-4 py-5 md:p-5 h-full md:h-fit w-full md:!w-fit',
            isReverse
              ? 'rounded-b-[5px] sm:!rounded-r-[5px] sm:!rounded-bl-[0px]'
              : 'rounded-b-[5px] sm:!rounded-br-[0px] sm:!rounded-l-[5px]'
          )}
        >
          <h2 className='font-semibold text-xl md:text-[32px] !leading-[24px] md:leading-[38px] mb-[10px]'>
            {title}
          </h2>
          <p className='max-w-[415px] text-sm md:text-base leading-[20px] md:leading-[23px] mb-[10px] md:mb-[30px]'>
            {detail}
          </p>
          <a href='mailto:bentleyadamsnig@gmail.com' target='_blank'>
            <Button className='bg-light-orange text-orange'>Contact Us</Button>
          </a>
        </div>
      </div>

      <StaticImage
        alt='service-image'
        src={image}
        fill={false}
        imageClassName={cn(
          'w-full h-full object-cover rounded-[5px] md:rounded-[20px] rounded-b-[0px] sm:rounded-[5px]',
          isReverse ? 'sm:!rounded-r-[0px]' : 'sm:!rounded-l-[0px]'
        )}
        className='w-full flex-1 max-h-[600px]'
      />
    </motion.div>
  );
};

export default Service;
