import React from "react";
import { SignIn } from "@clerk/nextjs";


const Signin = ({data}: any) => {
  
  return (
    <div className="animate-fade-up">
      <SignIn 
        signUpUrl={process.env.NEXT_PUBLIC_CLERK_SIGNUP_URL} 
        afterSignUpUrl={process.env.NEXT_PUBLIC_CLERK_DASHBOARD_URL} />
    </div>
  )
}

export default Signin;
