import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function setItem (key: string, value: string) {
  localStorage.setItem(key, value);
}

export function getItem (key: string) {
  return localStorage.getItem(key);
};

export function removeItem (key: string) {
  return localStorage.removeItem(key);
};