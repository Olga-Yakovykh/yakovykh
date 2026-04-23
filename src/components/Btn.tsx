import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export type BtnVariant = 'primary' | 'dark' | 'outline' | 'ghost-light' | 'gold';
export type BtnSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: BtnVariant;
  size?: BtnSize;
  className?: string;
  children: ReactNode;
}

type BtnProps =
  | (BaseProps & { href: string; to?: never; onClick?: never; target?: string; rel?: string })
  | (BaseProps & { to: string; href?: never; onClick?: never; target?: never; rel?: never })
  | (BaseProps & { onClick?: () => void; href?: never; to?: never; target?: never; rel?: never });

// Map semantic variants to neoclassical CSS classes
const variantClasses: Record<BtnVariant, string> = {
  gold:          'neo-btn-gold',   // solid gold — primary CTAs on any bg
  primary:       'neo-btn-ghost',  // outlined white — on dark/photo backgrounds
  'ghost-light': 'neo-btn-ghost',  // same
  dark:          'neo-btn-dark',   // solid dark — CTAs on light/white backgrounds
  outline:       'neo-btn-outline', // outlined dark — secondary on light backgrounds
};

// Size only adjusts padding — typography stays consistent
const sizeClasses: Record<BtnSize, string> = {
  sm: 'px-7 py-3 text-[9px]',
  md: '',  // default from neo-btn base
  lg: 'px-12 py-4',
};

export const Btn = ({
  variant = 'dark',
  size = 'md',
  className,
  children,
  ...rest
}: BtnProps) => {
  const cls = cn(variantClasses[variant], sizeClasses[size], className);

  if ('href' in rest && rest.href) {
    return (
      <a href={rest.href} target={rest.target} rel={rest.rel} className={cls}>
        {children}
      </a>
    );
  }
  if ('to' in rest && rest.to) {
    return (
      <Link to={rest.to} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} onClick={'onClick' in rest ? rest.onClick : undefined}>
      {children}
    </button>
  );
};
