import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../lib/utils';

const cardVariants = cva(
  'rounded-xl space-y-5 border-transparent border bg-white p-4   transition-all hover:-translate-y-1 duration-300  dark:bg-dark  dark:text-white shadow-xl ',
  {
    variants: {
      variant: {
        default: ' ',
        elevated: ' shadow-lg',
      },
      size: {
        default: 'w-full',
        sm: 'w-[260px]',
        lg: 'w-[400px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof cardVariants> & { asChild?: boolean }
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp
      ref={ref}
      data-slot="card"
      className={cn(cardVariants({ variant, size, className }))}
      {...props}
    />
  );
});
Card.displayName = 'Card';

const CardImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  <img
    src={src}
    alt={alt}
    className={cn('w-full rounded-lg h-56 object-cover', className)}
  />
);



const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(' space-y-2', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('  flex items-center justify-between', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardImage, CardContent, CardFooter, cardVariants };
