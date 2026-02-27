import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

const buttonVariants = cva(
  "focus-ring inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-[17px] font-semibold transition-transform duration-200 hover:-translate-y-0.5",
  {
    variants: {
      variant: {
        primary: "bg-brandPink text-white hover:brightness-110",
        secondary: "bg-brandYellow text-blackMain hover:bg-brandYellowDark",
        ghost: "bg-brandPinkLight text-white hover:bg-brandPinkPastel hover:text-blackMain"
      },
      size: {
        sm: "px-4 text-base",
        md: "px-6 text-base",
        lg: "px-8 text-[1.0625rem]"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    children: ReactNode;
  };

export function Button({ className, variant, size, children, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {children}
    </button>
  );
}
