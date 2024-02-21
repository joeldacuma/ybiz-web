import React, { useState, useRef } from "react";
import { IntersectObserver } from "@/components/IntersectObserver";

const HomeGallery = ({ data }: any) => {
  const galleryRef = useRef(null);
  const galleryIntersectObserver = IntersectObserver(galleryRef);
  const [galleries] = useState(data.galleries || null);

  return (
    <div className="bg-black">
      <div className="container lg:p-24 md:p-24 py-12 flex flex-wrap">
        <div ref={galleryRef} className={`flex w-full mb-16 flex-wrap ${galleryIntersectObserver ? "animate-fade-up animate-once animate-ease-in" : "invisible"}`}>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4 text-white">
            {galleries.data.title}
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-white">
            {galleries.data.description}
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div ref={galleryRef} className={`md:p-2 p-1 w-1/2 ${galleryIntersectObserver ? "animate-fade-right animate-once animate-ease-in" : "invisible"}`}>
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-md"
                src={galleries.data.GalleryFirstColumn.smallPicture.url}
              />
            </div>
            <div ref={galleryRef} className={`md:p-2 p-1 w-1/2 ${galleryIntersectObserver ? "animate-fade-left animate-once animate-ease-in" : "invisible"}`}>
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-md"
                src={galleries.data.GalleryFirstColumn.smallPicture2.url}
              />
            </div>
            <div ref={galleryRef} className={`md:p-2 p-1 w-full ${galleryIntersectObserver ? "animate-fade-up animate-once animate-ease-in" : "invisible"}`}>
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block rounded-md"
                src={galleries.data.GalleryFirstColumn.bigPicture.url}
                />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div ref={galleryRef} className={`md:p-2 p-1 w-full ${galleryIntersectObserver ? "animate-fade-down animate-once animate-ease-in" : "invisible"}`}>
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block rounded-md"
                src={galleries.data.GallerySecondColumn.bigPicture.url}
              />
            </div>
            <div ref={galleryRef} className={`md:p-2 p-1 w-1/2 ${galleryIntersectObserver ? "animate-fade-right animate-once animate-ease-in" : "invisible"}`}>
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-md"
                src={galleries.data.GallerySecondColumn.smallPicture1.url}
              />
            </div>
            <div ref={galleryRef} className={`md:p-2 p-1 w-1/2 ${galleryIntersectObserver ? "animate-fade-left animate-once animate-ease-in" : "invisible"}`}>
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-md"
                src={galleries.data.GallerySecondColumn.smallPicture2.url}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
