import React, { ReactNode } from 'react';
import { cn } from '../utils/helpers';

const Button = ({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      className={cn(
        'flex cursor-pointer justify-center gap-2 px-4 py-[11px] bg-orange text-sm leading-5 font-semibold text-white w-fit rounded-[8px] hover:bg-opacity-80 hover:scale-105 transition-transform duration-200',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
