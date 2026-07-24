import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BC0000] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-[#BC0000] text-white border-2 border-[#BC0000] hover:border-[#920000] hover:bg-[#920000]",
        secondary:
          "bg-transparent text-[#39454B] border-2 border-[#39454B] hover:border-[#BC0000] hover:bg-[#BC0000] hover:text-white",
        ghost: "bg-transparent text-[#39454B] hover:bg-[#FFF1F1] hover:text-[#BC0000]",
      },
      size: {
        default: "rounded-[3.75rem] px-6 py-3 text-sm",
        sm: "rounded-[3.75rem] px-4 py-2 text-xs",
        lg: "rounded-[3.75rem] px-8 py-3.5 text-base",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
