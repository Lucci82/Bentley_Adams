'use client';
import EkitiLogo from '@/components/svg/ekiti-logo';
import OassLogo from '@/components/svg/oass-logo';
import OndoLogo from '@/components/svg/ondo-logo';
import OyoLogo from '@/components/svg/oyo-logo';
import React from 'react';
import Project from './project';
import { motion } from 'framer-motion';

const ProjectItems = () => {
  const projectItems = [
    {
      client: 'Ondo State Government',
      location: 'Ondo State',
      projectName:
        'Design and Supervision Consultant for Road Engineering Works and Related Services.',
      tags: 'Project Management',
      logo: <OndoLogo />,
    },
    {
      client: 'Mr Olukunle Adeoye Akanbi',
      location: 'Ibeju-Lekki, Lagos State',
      projectName: 'Consultant Structural Engineer for the Development of Hotel Structure.',
      tags: 'Project Management',
      logo: <OassLogo />,
    },
    {
      client: 'LGAs',
      location: 'Asaba',
      projectName:
        'Design and Supervision Consultancy Services for Improvement of Agro-Logistics Centers in Oyo State.',
      tags: 'Construction Engineering',
      logo: <OassLogo />,
    },
    {
      client: 'Nigerian Inland Waterways Authority.  (NIWA).',
      location: 'Markudi',
      projectName:
        'Consultancy Services for Bathymetric Survey for the proposed Inland and Intracoastal Waterways Operations. (Appointment as Sub-Consultant: Port Design Expert). Makurdi project site',
      tags: 'Water Engineering',
      logo: <OassLogo />,
    },
    {
      client: 'Oyo State CGGC Global Items Nigeria Limited.',
      location: 'Oyo',
      projectName: 'Consultancy for the Shop Drawing production for 6Nos Culverts.',
      tags: 'Flood Control',
      logo: <OyoLogo />,
    },
    {
      client: 'Ekiti State Government',
      location: 'Ekiti State',
      projectName:
        'Revalidation of Environmental and Socio-Economic Data Survey of the   Year 2023 beneficiary Local government Areas of SURWASH program in Ekiti State.',
      tags: 'Consultancy',
      logo: <EkitiLogo />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false }} 
      className='bg-grey-75 px-4 md:px-10 lg:px-[85px] py-[30px] md:py-[50px] flex flex-col gap-5 md:gap-[30px]'
    >
      <div className='flex justify-center md:items-center flex-col gap-[10px] md:gap-5'>
        <h2 className='text-[40px] md:text-[56px] leading-[48px] md:leading-[59px] font-semibold text-grey-700 md:text-center'>
          Projects
        </h2>
        <p className='text-sm md:text-base font-normal text-grey-800 leading-[20px] md:leading-[23px] md:text-center max-w-[700px]'>
          We&apos;ve been entrusted with several projects, and naturally, we exceeded the
          client&apos;s expectations in delivery.
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[10px] md:gap-5 2xl:gap-20'>
        {projectItems.map((item, index) => (
          <Project key={index} {...item} />
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectItems;
