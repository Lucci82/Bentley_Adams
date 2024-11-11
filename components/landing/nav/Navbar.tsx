'use client';
import Hamburger from '@/components/svg/hamburger';
import Logo from '@/components/svg/logo';
import Xclose from '@/components/svg/xclose';
import Button from '@/components/Button';
import { cn } from '@/components/utils/helpers';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [activeNav, setActiveNav] = React.useState('home');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const navItems = React.useMemo(
    () => [
      {
        label: 'Home',
        link: 'home',
      },
      {
        label: 'Projects',
        link: 'projects',
      },
    ],
    []
  );

  useEffect(() => {
    const currentTab = navItems.find((tab) => tab.link === pathname.slice(1));
    if (currentTab) {
      setActiveNav(currentTab.link);
    }
  }, [pathname, navItems]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <div className='fixed z-[1000] top-0 left-0 right-0'>
      <div className='flex bg-white justify-between items-center h-[72px] md:h-[85px] px-4 md:px-16 relative z-50 !border-b border-grey-300'>
        <Link href={'/'}>
          <Logo className='!w-[102.74px] !h-[45px]' />
        </Link>
        <div className='hidden sm:flex gap-16'>
          {navItems?.map((item) => (
            <Link
              key={item?.link}
              href={`${item.link === 'home' ? '/' : `/${item.link}`}`}
              className={cn(
                'text-lg leading-[26px] font-medium text-gray-500 relative',
                activeNav === item?.link &&
                  'pb-2 font-semibold text-grey-900 after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0',
                activeNav === item?.link && 'after:h-[3px] after:bg-grey-900 after:rounded-full'
              )}
              onClick={() => setActiveNav(item?.link)}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <a href='mailto:bentleyadamsnig@gmail.com' target='_blank'>
          <Button className='hidden sm:flex'>Contact Us</Button>
        </a>
        <div className='sm:hidden cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {!isMenuOpen ? <Hamburger /> : <Xclose />}
          </motion.div>
        </div>
      </div>

      {isMenuOpen && (
        <>
          <div className='fixed inset-0 h-screen bg-black/60 z-40 sm:hidden' />
          <motion.div
            className='bg-white flex flex-col gap-5 py-[30px] px-4 sm:hidden relative z-50'
            initial={{ y: '-72px' }}
            animate={{ y: isMenuOpen ? 0 : '-72px' }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 50,
              duration: 0.5,
            }}
          >
            <div className='flex flex-col gap-5'>
              {navItems?.map((item) => (
                <Link
                  key={item?.link}
                  href={`${item.link === 'home' ? '/' : `/${item.link}`}`}
                  className={cn(
                    'w-full py-[11px] text-gray-500 text-center text-lg leading-[26px] font-medium hover:border hover:border-grey-900 hover:rounded-[10px]',
                    activeNav === item?.link && 'pb-2 font-semibold text-grey-900'
                  )}
                  onClick={() => {
                    setActiveNav(item?.link);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <a href='mailto:bentleyadamsnig@gmail.com' target='_blank'>
              <Button className='w-full'>Contact Us</Button>
            </a>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Navbar;
