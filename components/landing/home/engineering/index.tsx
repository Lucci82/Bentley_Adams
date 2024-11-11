'use client';
import React from 'react';
import Building from '@/assets/images/building.png';
import Building2 from '@/assets/images/building-2.png';
import { StaticImage } from '@/components/static-image';
import Button from '@/components/Button';
import ArrowRight from '@/components/svg/arrow-right';
import { PartnersLogo } from '@/components/constants';
import { motion } from 'framer-motion';

const HomeEngineering = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-72px)] md:h-[calc(100vh-85px)] justify-between">
      <div className="relative !flex-1 h-full">
        <div className="flex justify-center items-center h-full">
          <div className="flex items-start flex-col px-4 gap-5">
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[52px] md:text-[82px] md:max-w-[940px] leading-[58px] md:leading-[80px] font-bold text-grey-75"
            >
              Engineering Excellence, From Concept to Completion
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:max-w-[700px] text-base md:text-lg leading-[26px] font-medium text-grey-100"
            >
              Trusted engineering consultancy providing comprehensive project
              management and design solutions for infrastructure, structural,
              and transportation projects.
            </motion.p>

            <motion.a
              href="mailto:bentleyadamsnig@gmail.com"
              target="_blank"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Button className="!px-5 !py-[15px] flex items-center">
                Contact Us
                <ArrowRight />
              </Button>
            </motion.a>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute h-full hidden md:block w-full top-0 left-0 -z-10">
          <StaticImage
            alt="building"
            src={Building}
            fill={false}
            imageClassName="w-full h-full object-cover"
            className="w-full h-full"
          />
        </div>
        <div className="absolute h-full w-full md:hidden top-0 left-0 -z-10">
          <StaticImage
            alt="building-2"
            src={Building2}
            fill={false}
            imageClassName="w-full h-full object-cover"
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="flex overflow-hidden items-center pt-[30px] pb-[30px] md:py-8 px-5 w-full">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 30,
          }}
          className="flex flex-shrink-0"
        >
          {PartnersLogo.map((item, index) => (
            <div key={index} className="pr-5 md:pr-[50px] lg:pr-20 xl:pr-24">
              {item?.logo}
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 30,
          }}
          className="flex flex-shrink-0"
        >
          {PartnersLogo.map((item, index) => (
            <div key={index} className="pr-5 md:pr-[50px] lg:pr-20 xl:pr-24">
              {item?.logo}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HomeEngineering;
