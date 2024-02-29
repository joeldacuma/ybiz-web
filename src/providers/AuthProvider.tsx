"use server";

import { AxiosInstanceProvider } from "@/providers/index";
import { cookies } from "next/headers";
import { CMS_COOKIE_TOKEN } from "@/constants";


export const cmsRegister = async (body: any) => {
  try {
    const response = await AxiosInstanceProvider.post("/auth/local/register", body);
    const data = response.data;
    cookies().set({
      name: CMS_COOKIE_TOKEN,
      value: data.jwt,
      maxAge: 60 * 60 * 24,
      httpOnly: true,
      sameSite: "strict",
    });
    
    const result = response.data;
    return { result: result };
  } catch (error) {
    return { error: error };
  }
};