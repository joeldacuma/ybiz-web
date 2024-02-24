import {redirect} from "next/navigation";
import { getUser, getAuthorizationUrl } from "@/auth";

export default async function HomePage() {
  const { isAuthenticated, user } = await getUser();
  const authUrl = await getAuthorizationUrl();
  
  if (!isAuthenticated) {
    redirect(authUrl);
  } else {
    redirect("/dashboard");
  }
}