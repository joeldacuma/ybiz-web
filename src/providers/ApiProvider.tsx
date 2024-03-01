"use client"

import { AxiosInstanceProvider } from "@/providers/index";

export const getHeaders = async () => {
  try {
    const response = await AxiosInstanceProvider.get("/header?populate=deep&_limit=-1");
    return { headers: response.data };
  } 
  catch (error) {
    return { error: error };
  }
};

export const getBanners = async () => {
  try {
    const response = await AxiosInstanceProvider.get("/home-banner-section?populate=deep&_limit=-1");
    return { banners: response.data };
  } 
  catch (error) {
    return { error: error };
  }
}

export const getFeatures = async () => {
  try {
    const response = await AxiosInstanceProvider.get("/home-features-section?populate=deep&_limit=-1");
    return { features: response.data };
  } 
  catch (error) {
    return { error: error };
  }
};

export const getPrograms = async () => {
  try {
    const response = await AxiosInstanceProvider.get("/home-programs-section?populate=deep&_limit=-1");
    return { programs: response.data };
  } 
  catch (error) {
    return { error: error };
  }
};

export const getGalleries = async () => {
  try {
    const response = await AxiosInstanceProvider.get("/home-gallery-section?populate=deep&_limit=-1");
    return { galleries: response.data };
  } 
  catch (error) {
    return { error: error };
  } 
};

export const getFooter = async () => {
  try {
    const response = await AxiosInstanceProvider.get("/footer?populate=deep&_limit=-1");
    return { footers: response.data };
  } 
  catch (error) {
    return { error: error };
  }
};

export const getTestimonials = async () => {
  try {
    const response = await AxiosInstanceProvider.get("/home-testimonials-section?populate=deep&_limit=-1");
    return { testimonials: response.data };
  } 
  catch (error) {
    return { error: error };
  }
};

export const getAbout = async () => {
  try {
    const response = await AxiosInstanceProvider.get("/home-about-section?populate=deep&_limit=-1");
    return { informations: response.data };
  } 
  catch (error) {
    return { error: error };
  }
};

export const getLoginContent = async () => {
  try {
    const response = await AxiosInstanceProvider.get("/login?populate=deep&_limit=-1");
    return { loginContent: response.data };
  } 
  catch (error) {
    return { error: error };
  }
};

export const getSubscriberByUserId = async (userId: number) => {
  try {
    const response = await AxiosInstanceProvider.get(`/subscribers/${userId}?populate=deep&_limit=-1`);
    return { subscriber: response.data };
  } 
  catch (error) {
    return { error: error };
  }
};

export const createSubscriber = async (data: any) => {
  try {
    const response = await AxiosInstanceProvider.post("/subscribers", data);
    return { subscriber: response.data };
  } 
  catch (error) {
    return { error: error };
  }
};
