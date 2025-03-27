
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number, currency?: string): string {
  const currencySymbol = currency || '€';
  return `${price.toLocaleString()} ${currencySymbol}`;
}
