'use client';
import Button from '@/components/Button';
import { StaticImage } from '@/components/static-image';
import React from 'react';
import Architect from '@/assets/images/architect.png';
import Highrise from '@/assets/images/highrise.png';

const ContactUs = () => {
  return (
    <div className='relative flex-1'>
      <div className='md:py-16 py-[30px] bg-[#26292E]/70 px-4 md:px-10 flex flex-col gap-10 justify-center w-full items-center'>
        <div className='flex flex-col gap-5 justify-center items-center'>
          <p className='max-w-[650px] text-[48px] md:text-[56px] font-semibold text-white leading-[53px] md:leading-[62px] text-start sm:text-center'>
            Together .... We can build <span className='text-orange'>ANYTHING!</span>
          </p>
          <a href='mailto:bentleyadamsnig@gmail.com' target='_blank'>
            <Button>Contact Us</Button>
          </a>
        </div>

        <StaticImage
          alt='architect-image'
          src={Architect}
          fill={false}
          imageClassName='w-full h-full object-cover rounded-[10px]'
          className='max-w-[900px] lg:h-[500px]'
        />
      </div>
      <div className='absolute h-full w-full top-0 left-0 -z-10'>
        <StaticImage
          alt='highrise'
          src={Highrise}
          fill={false}
          imageClassName='w-full h-full object-cover'
          className='w-full h-full'
        />
      </div>
    </div>
  );
};

export default ContactUs;
