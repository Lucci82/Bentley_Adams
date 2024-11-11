'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Service from './service';
import ConstructionSite from '@/assets/images/construction-site.png';
import Bridge from '@/assets/images/bridge.png';
import Flood from '@/assets/images/flood.png';

const Services = () => {
  const services = [
    {
      title: 'Project Management',
      description:
        'Our construction engineering includes expert guidance throughout the building process, from planning and design to construction oversight and completion. This ensures your project is built efficiently, safely, and according to your vision.',
      image: ConstructionSite,
    },
    {
      title: 'Highway Engineering',
      image: Bridge,
      description:
        'We offer expert planning, design, and construction oversight for roads, bridges, and tunnels. Our services ensure safe, efficient transportation infrastructure that meets the needs of your community.',
    },
    {
      title: 'Flood Control',
      image: Flood,
      description:
        'We also specialize in designing and implementing solutions to mitigate flood risks.  Our services include analyzing floodplains, designing levees, and creating drainage systems to protect communities and infrastructure from flooding.',
    },
  ];

  return (
    <div className='py-[50px] md:px-10 md:py-16 px-4 lg:px-20'>
      <div className='flex flex-col justify-center md:items-center gap-[10px] md:gap-5 mb-[30px] md:mb-[60px]'>
        <h2 className='text-[40px] md:text-[56px] leading-[48px] md:leading-[59px] font-semibold text-grey-800 text-start md:text-center'>
          The services we offer
        </h2>
        <p className='text-base font-normal text-grey-500 leading-[23px] md:text-center max-w-[600px]'>
          We focus intensely on three core services, ensuring we maintain peak performance and
          readiness to deliver our utmost to you.
        </p>
      </div>

      <motion.div
        className='flex flex-col gap-[10px] sm:gap-5'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
            viewport={{ once: false }}
          >
            <Service
              title={service.title}
              detail={service.description}
              image={service.image}
              isReverse={index === 1}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
