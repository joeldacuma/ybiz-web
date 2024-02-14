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
