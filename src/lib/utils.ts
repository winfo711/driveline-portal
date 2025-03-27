
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number, currency?: string): string {
  const currencySymbol = currency || '€';
  return `${price.toLocaleString()} ${currencySymbol}`;
}

// Helper function to create a URL-friendly slug from a string
export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}
