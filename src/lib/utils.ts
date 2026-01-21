import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
export function NAMN(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
