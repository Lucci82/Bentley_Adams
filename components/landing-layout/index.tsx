import React from 'react';

import Navbar from '@/components/landing/nav/Navbar';

export default async function HomepageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full relative'>
      <Navbar />
      <div className='mt-[72px] md:mt-[85px]'>{children}</div>
    </div>
  );
}
