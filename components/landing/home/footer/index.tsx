'use client';
import Facebook from '@/components/svg/facebook';
import Instagram from '@/components/svg/instagram';
import Linkedln from '@/components/svg/linkedln';
import Logo from '@/components/svg/logo';
import Twitter from '@/components/svg/twitter';
import React from 'react';

const Footer = () => {
  return (
    <div className="bg-grey-75 py-[56px] px-4 md:px-10 lg:px-20 flex flex-col gap-[30px] md:gap-16">
      <div className="bg-white px-4 md:px-[30px] py-[10px] md:pt-8 md:pb-0 flex flex-col md:flex-row justify-between items-center gap-5">
        <Logo />
        <div className="flex flex-col md:flex-row items-center gap-[10px] md:gap-5 lg:gap-[56px]">
          <div className="flex items-center gap-2 text-sm leading-[20px]">
            <p className="font-semibold text-grey-700">Contact us</p>
            <p className="text-orange font-medium underline">
              bentleyadamsnig@gmail.com
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="font-semibold text-sm text-grey-700 leading-[20px]">
              Follow Us
            </p>
            <div className="flex items-center gap-2">
              {[
                <Facebook key={0} />,
                <Twitter key={1} />,
                <Instagram key={2} />,
                <Linkedln key={3} />,
              ].map((icon, index) => (
                <div key={index} className="cursor-pointer">
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[10px] md:flex-row justify-between text-grey-700">
        <div className="flex flex-col md:flex-row gap-[10px] md:gap-4 lg:gap-16 items-start md:items-center text-base font-semibold leading-[23px]">
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
        <p className="text-base font-normal leading-[23px]">
          © 2023 . Powered by <span className="font-semibold">Ryvision</span>.
          All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
