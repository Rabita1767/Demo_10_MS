'use client';

import React from 'react';
import { clsx } from 'clsx';

type ButtonVariant = 'primary' | 'outline' | 'danger' | 'ghost' | 'greenBG';
type ButtonSize = 'sm' | 'md' | 'lg' ;

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  className = '',
  onClick,
}) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded font-medium transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
    danger: 'bg-red-600 text-white hover:bg-red-700',
    ghost: 'bg-transparent text-blue-600 hover:underline',
    greenBG:"bg-[#1cab55] text-[#ffffff] hover:bg-[#1cab55]/90",
  };

  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };

  const finalClassName = clsx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={finalClassName}>
      {children}
    </button>
  );
};

export default Button;
