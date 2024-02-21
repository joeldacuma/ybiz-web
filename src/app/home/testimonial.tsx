import React, { useState, useRef } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { IntersectObserver } from "@/components/IntersectObserver";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HomeTestimonial = ({ data }: any) => {
  const testimonialRef = useRef(null);
  const testimonialIntersectObserver = IntersectObserver(testimonialRef);
  const [testimonials] = useState(data.testimonials || null);

  return (
    <div className="w-full bg-white py-12 space-y-6 md:py-24 lg:py-32">
      <div className="container space-y-6">
        <div ref={testimonialRef} className={`space-y-2 text-center ${testimonialIntersectObserver ? "animate-fade-down animate-ease-in" : "invisible"}`}>
          <h1 className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-4xl">
            {testimonials.data.title}
          </h1>
          <p className="mx-auto max-w-2xl text-gray-500 dark:text-gray-400">
            {testimonials.data.description}
          </p>
        </div>
        <div>
          <Carousel className="w-full">
            <CarouselContent className="p-3">
              {testimonials.data.members.map((item: any) => (
                <CarouselItem key={item.id} className="pl-1 md:basis-1/2 lg:basis-1/2">
                  <div ref={testimonialRef} className={`h-full bg-gray-100 p-8 rounded ${testimonialIntersectObserver ? "animate-fade-down animate-ease-in" : "invisible"}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="block w-5 h-5 text-gray-400 mb-4"
                      viewBox="0 0 975.036 975.036"
                    >
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p className="leading-relaxed mb-6">{item.testimony}</p>
                    <a className="inline-flex items-center">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src={item.image.url} alt={item.name} />
                        <AvatarFallback>{item.name}</AvatarFallback>
                      </Avatar>
                      <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-medium text-gray-900">
                          {item.name}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {item.business}
                        </span>
                      </span>
                    </a>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonial;
