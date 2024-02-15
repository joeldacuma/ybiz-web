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
