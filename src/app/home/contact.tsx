import React from "react";

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const HomeContact = () => {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-4xl">Contact Us</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 leading-relaxed dark:text-gray-400">
            We're here to help. Let us know how we can assist you.
          </p>
        </div>
        <div className="w-full max-w-[600px] mx-auto space-y-4">
          <form className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea className="min-h-[150px] resize-none" id="message" placeholder="Enter your message" />
            </div>
            <Button className="w-full" type="submit">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;