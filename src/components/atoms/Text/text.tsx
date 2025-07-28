import React from 'react';
import { clsx } from 'clsx';

type TextVariant = 'body' | 'heading' | 'subtle' | 'label' | 'black24' | 'listItem' | 'font14' | 'font18' | 'sectionHeader' | 'font16';
type TextTag = 'p' | 'span' | 'div' | 'label' | 'strong';

type TextProps = {
  children: React.ReactNode;
  as?: TextTag;
  variant?: TextVariant;
  className?: string;
};

const variantClasses: Record<TextVariant, string> = {
  body: 'text-base text-gray-800',
  heading: 'text-[36px] font-semibold text-[#ffffff]',
  subtle: 'text-sm text-gray-500',
  label: 'text-sm font-medium text-gray-700',
  black24: 'text-black text-[23px] font-semibold',
  listItem: 'text-[16px] text-[#111827] font-[600]',
  font14:'text-[14px]',
  font16:'text-[16px]',
  font18:'text-[18px]',
  sectionHeader:'text-[24px] font-semibold text-[#111827]',
};

const Text: React.FC<TextProps> = ({
  children,
  as = 'p',
  variant = 'body',
  className = '',
}) => {
  const Component = as;
  const finalClassName = clsx(variantClasses[variant], className);

  return <Component className={finalClassName}>{children}</Component>;
};

export default Text;
