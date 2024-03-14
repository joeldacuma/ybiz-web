import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function setItem(key: string, value: any) {
  localStorage.setItem(key, value);
}

export function getItem(key: string) {
  return localStorage.getItem(key);
};

export function removeItem(key: string) {
  return localStorage.removeItem(key);
};

export function setSessionItem(key: string, value: any) {
  sessionStorage.setItem(key, value);
}

export function getSessionItem(key: string) {
  return sessionStorage.getItem(key);
};

export function removeSessionItem(key: string) {
  return sessionStorage.removeItem(key);
};

export function clearItem() {
  return localStorage.clear();
};

export function clearSessionItem() {
  return sessionStorage.clear();
};
