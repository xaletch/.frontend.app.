import { cn } from "@/shared/lib";
import React from "react";

export type ReactDiveAttributer = React.HTMLAttributes<HTMLElement>;

const Card = React.forwardRef<HTMLDivElement, ReactDiveAttributer>(({ className, ...props }, ref) => (
  <div 
    ref={ref}
    className={cn("bg-gray-2/80 rounded-3xl px-6 py-4", className)}
    {...props}
  />
));
Card.displayName = "Card";

export { Card };