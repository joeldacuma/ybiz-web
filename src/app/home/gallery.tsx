import React, { useState } from "react";

const HomeGallery = ({ data }: any) => {
  const [galleries] = useState(data.galleries || null);

  return (
    <div className="bg-black">
      <div className="container lg:px-24 md:px-24 px-12 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4 text-white">
            {galleries.data.title}
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-white">
            {galleries.data.description}
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-md"
                src={galleries.data.GalleryFirstColumn.smallPicture.url}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-md"
                src={galleries.data.GalleryFirstColumn.smallPicture2.url}
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block rounded-md"
                src={galleries.data.GalleryFirstColumn.bigPicture.url}
                />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block rounded-md"
                src={galleries.data.GallerySecondColumn.bigPicture.url}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block rounded-md"
                src={galleries.data.GallerySecondColumn.smallPicture1.url}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
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
